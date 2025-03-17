export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { captchaToken } = req.body;

    console.log(captchaToken);
    // if (!captchaToken) {
    //   return res.status(400).json({ message: 'Ошибка: не пройдена проверка reCAPTCHA' });
    // }

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
      return res.status(400).json({ message: 'Ошибка: неверная проверка reCAPTCHA' });
    }

    res.status(200).json({ message: 'Форма успешно отправлена!' });
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
