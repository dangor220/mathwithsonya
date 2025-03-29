import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { captchaToken } = await req.json();

    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: 'Ошибка: не пройдена проверка reCAPTCHA' },
        { status: 400 },
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: 'Ошибка: секретный ключ не найден' },
        { status: 500 },
      );
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: captchaToken,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json(
        { success: false, message: 'Ошибка: неверная проверка reCAPTCHA' },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true, message: 'Форма успешно отправлена!' });
  } catch (error) {
    console.error('Ошибка при валидации:', error);
    return NextResponse.json({ success: false, message: 'Ошибка на сервере' }, { status: 500 });
  }
}
