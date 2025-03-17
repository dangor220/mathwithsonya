export default async function handler(req, res) {
  const { captchaToken } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error('RECAPTCHA_SECRET_KEY is not defined');
  }

  const googleResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    body: new URLSearchParams({
      secret: secretKey,
      response: captchaToken,
    }),
  });

  const googleResult = await googleResponse.json();

  if (googleResult.success) {
    return res.status(200).json({ success: true });
  } else {
    // Если ошибка валидации
    return res.status(400).json({ success: false });
  }
}
