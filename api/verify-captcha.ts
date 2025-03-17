export default async function handler(req, res) {
  try {
    const { captchaToken } = req.body;

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return res
        .status(500)
        .json({ success: false, message: 'RECAPTCHA_SECRET_KEY is not defined' });
    }

    if (!captchaToken) {
      return res.status(400).json({ success: false, message: 'No captcha token provided' });
    }

    const googleResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: secretKey,
        response: captchaToken,
      }),
    });

    if (!googleResponse.ok) {
      return res.status(500).json({ success: false, message: 'Failed to verify reCAPTCHA' });
    }

    const googleResult = await googleResponse.json();

    if (!googleResult.success) {
      return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error during reCAPTCHA verification:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
