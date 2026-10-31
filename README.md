<a id="readme-top"></a>

<!-- PROJECT LOGO -->

<div align="center">

  <a href="https://www.mathwithsonya.ru/">
    <img src="app/icon0.svg" alt="Math&Sonya Logo" width="80" height="80">
  </a>

  <h3 align="center">Math&Sonya: сайт репетитора по математике Софьи Алексеевны</h3>

  <p align="center">
    Сайт-визитка репетитора по математике для учеников 4–9 классов. Информация о преподавателе, форматах занятий, отзывах и способах связи — в одном месте.
    <br />
    <br />
    <a href="https://github.com/dangor220/mathwithsonya/tree/main/app">Посмотреть код</a>
    <br />
    <br />
    <a href="https://www.mathwithsonya.ru/">Открыть сайт</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#описание">Описание</a>
      <ul>
        <li><a href="#возможности">Возможности</a></li>
        <li><a href="#технологии">Технологии</a></li>
      </ul>
    </li>
    <li><a href="#установка-и-запуск">Установка и запуск</a></li>
    <li><a href="#переменные-окружения">Переменные окружения</a></li>
    <li><a href="#материалы">Материалы</a></li>
    <li><a href="#контакты">Контакты</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Описание

[![Предварительный просмотр сайта](public/og-image.png)](https://www.mathwithsonya.ru/)

**Math&Sonya** — адаптивный сайт-визитка репетитора по математике Софьи Алексеевны, разработанный на Next.js, React и TypeScript. Сайт знакомит родителей и учеников с преподавателем, её опытом и подходом к обучению, рассказывает о доступных форматах занятий и помогает записаться на урок.

Занятия рассчитаны на учеников 4–9 классов. Предусмотрены три формата обучения: онлайн, у преподавателя и с выездом к ученику. Для каждого формата представлены описание, преимущества и стоимость. Отдельные разделы посвящены отзывам, фотографиям и контактной информации.

Контент сайта можно получать из MockAPI. Если внешний источник данных не настроен или недоступен, приложение использует встроенный набор данных, поэтому основные разделы остаются доступными.

<p align="right">(<a href="#readme-top">В начало</a>)</p>

### Возможности

- Главная страница с информацией о преподавателе
- Раздел «Обо мне» с образованием, опытом и принципами преподавания
- Описание форматов занятий: онлайн, у преподавателя и с выездом
- Информация о стоимости, условиях и преимуществах занятий
- Галерея фотографий с просмотром изображений
- Карусель отзывов учеников и родителей
- Контактная информация, телефон, электронная почта и Telegram
- Форма записи на занятие с проверкой reCAPTCHA
- Карта с расположением и районами проведения занятий
- Адаптивная вёрстка для мобильных устройств и компьютеров
- SEO-метаданные, Open Graph, sitemap и robots.txt

<p align="right">(<a href="#readme-top">В начало</a>)</p>

### Технологии

[![Next.js][next.js]][next-url]
[![React][react.js]][react-url]
[![TypeScript][typescript.ts]][typescript-url]
[![Material UI][mui]][mui-url]
[![Sass][sass]][sass-url]

- **Next.js 15** — React-фреймворк и серверный рендеринг
- **React 19** — библиотека пользовательского интерфейса
- **TypeScript** — типизация
- **Material UI** и **Emotion** — компоненты и стилизация
- **Sass** — модульные стили
- **Swiper** — слайдеры и карусели
- **Yet Another React Lightbox** и **React Photo Album** — галерея изображений
- **Motion** — анимации
- **Axios** — HTTP-запросы
- **Google reCAPTCHA** — защита формы от автоматических отправок
- **next-sitemap** — генерация sitemap

<p align="right">(<a href="#readme-top">В начало</a>)</p>

## Установка и запуск

1. Клонируйте репозиторий:

   ```sh
   git clone https://github.com/dangor220/mathwithsonya.git
   ```

2. Перейдите в папку проекта и установите зависимости:

   ```sh
   cd mathwithsonya
   npm install
   ```

3. При необходимости настройте переменные окружения (см. раздел [«Переменные окружения»](#переменные-окружения)).

4. Запустите приложение в режиме разработки:

   ```sh
   npm run dev
   ```

5. Откройте в браузере адрес [http://localhost:3000](http://localhost:3000).

Для создания production-сборки используйте:

```sh
npm run build
npm run start
```

<p align="right">(<a href="#readme-top">В начало</a>)</p>

## Переменные окружения

Создайте в корне проекта файл `.env.local`.

| Переменная | Назначение |
| --- | --- |
| `NEXT_PUBLIC_MOCKAPI_KEY` | Необязательный идентификатор MockAPI. Используется для загрузки контента с адреса `https://<значение>.mockapi.io/data`. Если переменная не задана или запрос завершается ошибкой, используются локальные данные из `app/data/defaultContent.tsx`. |
| `RECAPTCHA_SECRET_KEY` | Секретный ключ Google reCAPTCHA для серверной проверки токена формы записи. |

Пример файла:

```env
NEXT_PUBLIC_MOCKAPI_KEY=
RECAPTCHA_SECRET_KEY=
```

Для работы проверки reCAPTCHA также необходимо настроить публичный ключ на стороне клиентского компонента. Не публикуйте секретные ключи в репозитории и не добавляйте файл `.env.local` в систему контроля версий.

<p align="right">(<a href="#readme-top">В начало</a>)</p>

## Материалы

- [Рабочий сайт](https://www.mathwithsonya.ru/)
- [Исходный код](https://github.com/dangor220/mathwithsonya/tree/main/app)
- [Репозиторий проекта](https://github.com/dangor220/mathwithsonya)
- [Документация Next.js](https://nextjs.org/docs)
- [Документация React](https://react.dev/)

<p align="right">(<a href="#readme-top">В начало</a>)</p>

<!-- CONTACT -->

## Контакты

- Сайт: [mathwithsonya.ru](https://www.mathwithsonya.ru/)
- Telegram преподавателя: [@sonechka_ger](https://t.me/sonechka_ger)
- Разработчик: [dangor](https://www.dangor.ru/)

- Ссылка на проект: [https://github.com/dangor220/mathwithsonya](https://github.com/dangor220/mathwithsonya)

<p align="right">(<a href="#readme-top">В начало</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[next.js]: https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=nextdotjs
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react
[react-url]: https://react.dev/
[typescript.ts]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript
[typescript-url]: https://www.typescriptlang.org/
[mui]: https://img.shields.io/badge/material--ui-20232A?style=for-the-badge&logo=mui
[mui-url]: https://mui.com/
[sass]: https://img.shields.io/badge/sass-20232A?style=for-the-badge&logo=sass
[sass-url]: https://sass-lang.com/
