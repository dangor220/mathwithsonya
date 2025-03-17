export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { captchaToken } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).json({ message: 'RECAPTCHA_SECRET_KEY is not defined' });
  }

  try {
    const googleResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
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
      return res.status(400).json({
        success: false,
        error: googleResult['error-codes'],
      });
    }
  } catch (error) {
    console.error('Error occurred:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message || 'Unknown error',
    });
  }
}
