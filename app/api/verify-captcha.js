export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { captchaToken } = req.body;

    if (!captchaToken) {
      return res
        .status(400)
        .json({ success: false, message: 'Ошибка: не пройдена проверка reCAPTCHA' });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      body: new URLSearchParams({
        secret: secretKey,
        response: captchaToken,
      }),
    });
    const data = await response.json();

    if (!data.success) {
      return res
        .status(400)
        .json({ success: false, message: 'Ошибка: неверная проверка reCAPTCHA' });
    }

    res.status(200).json({ success: true, message: 'Форма успешно отправлена!' });
  } else {
    res.status(405).json({ success: false, message: 'Метод не разрешен' });
  }
}
