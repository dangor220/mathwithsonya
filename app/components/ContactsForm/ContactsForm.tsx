import React, { useRef, useState } from 'react';
import { InputMask } from '@react-input/mask';
import ReCAPTCHA from 'react-google-recaptcha';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './ContactsForm.module.scss';
import { DefaultContent } from '@/types/defaultContentTypes';

enum MessageStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
  Captcha = 'captcha',
  Phone = 'phone',
}

export default function ContactsForm({ content }: { content: DefaultContent }): React.ReactNode {
  const [user, setUser] = useState('');
  const [tel, setTel] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState<MessageStatus>(MessageStatus.Idle);

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const apiOpenKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiRecaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!validatePhone(tel)) {
      setMessageStatus(MessageStatus.Phone);
      setPhoneError(true);
      setTimeout(() => {
        setMessageStatus(MessageStatus.Idle);
      }, 2000);
      return;
    } else {
      setPhoneError(false);
    }

    if (!captchaToken) {
      setMessageStatus(MessageStatus.Captcha);
      setCaptchaError(true);
      return;
    } else {
      setCaptchaError(false);
    }

    const formData = new FormData(formRef.current);
    formData.delete('g-recaptcha-response');

    const url = `https://formhub.dev/io/${apiOpenKey}`;

    setMessageStatus(MessageStatus.Loading);

    try {
      const recaptchaResponse = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ captchaToken }),
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
          recaptchaRef.current?.reset();
          setCaptchaToken(null);
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
        return content.contacts.formSuccess;
      case MessageStatus.Failed:
        return content.contacts.formFailed;
      case MessageStatus.Captcha:
        return content.contacts.formCaptcha;
      case MessageStatus.Phone:
        return content.contacts.formPhone;
      default:
        return content.contacts.formSend;
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setMessageStatus(MessageStatus.Idle);
    setCaptchaError(false);
    setCaptchaToken(value);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
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
          placeholder={content.contacts.formName}
          required
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <InputMask
          className={phoneError ? styles.phone + ' ' + styles.phoneError : styles.phone}
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
            setPhoneError(false);
          }}
        />
      </div>

      <div className={styles.content}>
        <textarea
          className={styles.message}
          name="message"
          value={message}
          placeholder={content.contacts.formMessage}
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <input type="hidden" name="redirect-to" value="no-redirect"></input>
      <div className={styles.submit}>
        <button
          className={styles.button}
          id="submit-button"
          type="submit"
          disabled={messageStatus === MessageStatus.Loading}>
          {renderButtonContent()}
        </button>
        <ReCAPTCHA
          className={captchaError ? styles.recaptchaError : ''}
          ref={recaptchaRef}
          sitekey={apiRecaptchaKey || ''}
          onChange={handleCaptchaChange}
        />
      </div>
    </form>
  );
}
