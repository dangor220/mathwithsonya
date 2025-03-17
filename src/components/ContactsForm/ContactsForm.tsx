import React, { useRef, useState } from 'react';
import { InputMask } from '@react-input/mask';
import ReCAPTCHA from 'react-google-recaptcha';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './ContactsForm.module.scss';

enum MessageStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
}

export default function ContactsForm(): React.ReactNode {
  const [user, setUser] = useState('');
  const [tel, setTel] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState<MessageStatus>(MessageStatus.Idle);

  const formRef = useRef<HTMLFormElement>(null);

  const apiOpenKey = import.meta.env.VITE_API_KEY;
  const apiRecaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!captchaToken) {
      alert('Пожалуйста, подтвердите, что вы не робот');
      return;
    }

    const formData = new FormData(formRef.current);
    const url = `https://formhub.dev/io/${apiOpenKey}`;

    setMessageStatus(MessageStatus.Loading);

    try {
      console.log(captchaToken);

      const recaptchaResponse = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: captchaToken,
      });

      const recaptchaResult = await recaptchaResponse.json();

      if (!recaptchaResult.success) {
        alert('Ошибка валидации reCAPTCHA. Пожалуйста, попробуйте еще раз.');
        setMessageStatus(MessageStatus.Failed);
        return;
      }

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.text();
        if (result === 'OK') {
          console.log('Message was send');
          setUser('');
          setTel('');
          setMessage('');
          setMessageStatus(MessageStatus.Success);
        } else {
          console.log('Error: ' + result);
          setMessageStatus(MessageStatus.Failed);
        }
      } else {
        console.error('Error: ', response.status, response.statusText);
        setMessageStatus(MessageStatus.Failed);
      }
    } catch (error) {
      console.error('Network error:', error);
      setMessageStatus(MessageStatus.Failed);
    } finally {
      setTimeout(() => {
        setMessageStatus(MessageStatus.Idle);
      }, 2000);
    }
  };

  const renderButtonContent = () => {
    switch (messageStatus) {
      case MessageStatus.Loading:
        return (
          <>
            <Stack direction="column" alignItems="center">
              <CircularProgress size={20} color={'inherit'} />
            </Stack>
          </>
        );
      case MessageStatus.Success:
        return 'Сообщение отправлено';
      case MessageStatus.Failed:
        return 'Ошибка при отправке';
      default:
        return 'Отправить';
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaToken(value);
  };

  return (
    <form
      className={styles.contact}
      id="contact-form"
      action="#"
      method="POST"
      ref={formRef}
      onSubmit={handleSubmit}>
      <div className={styles.data}>
        <input
          className={styles.name}
          type="text"
          name="name"
          placeholder={'Как к вам обращаться?'}
          required
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <InputMask
          className={styles.phone}
          placeholder="+7 (___) ___-__-__"
          mask="+7 (___) ___-__-__"
          replacement={{ _: /\d/ }}
          type="tel"
          name="tel"
          value={tel}
          required
          onChange={(
            e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
          ) => {
            setTel(e.target.value);
          }}></InputMask>
      </div>

      <div className={styles.content}>
        <textarea
          className={styles.message}
          name="message"
          value={message}
          placeholder={'Сообщение'}
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <input type="hidden" name="redirect-to" value="no-redirect"></input>
      <ReCAPTCHA sitekey={apiRecaptchaKey} onChange={handleCaptchaChange} />
      <button
        className={styles.submit}
        id="submit-button"
        type="submit"
        disabled={messageStatus === MessageStatus.Loading}>
        {renderButtonContent()}
      </button>
    </form>
  );
}
