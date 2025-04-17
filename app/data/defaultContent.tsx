import { DefaultContent } from '../types/defaultContentTypes';

const defaultContent: DefaultContent[] = [
  {
    homeNav: 'Главная',
    aboutNav: 'Обо мне',
    servicesNav: 'Услуги',
    reviewsNav: 'Отзывы',
    contactsNav: 'Контакты',
    name: 'Софья',
    surname: 'Алексеевна',
    quote: 'Любовь к математике начинается с хорошего учителя!',
    about: {
      title: 'Обо мне',
      text_1:
        'Здравствуйте! Меня зовут Софья — я репетитор по математике.  Выпускница Псковского государственного университета с отличием по специальности «Математика и компьютерные науки» 🎓\n\nУже несколько лет я помогаю детям не только разбираться в математике, но и чувствовать себя увереннее, преодолевать страх перед предметом и даже получать от него удовольствие. Моя главная цель — сделать так, чтобы ученик не просто запоминал формулы, а действительно понимал логику и находил в решении задач интерес.\n\nОпыт работы:\n✅ ГБОУ «Инженерная школа № 1581»\n✅ ГБОУК СОШ № 2070\n✅ Частная школа - «Данко»\n\nРаботая с разными детьми, я поняла, насколько важно подбирать индивидуальный подход. Кому-то нужно объяснять медленно и подробно, кому-то — через образы и примеры, а кому-то достаточно задать правильный вектор, чтобы он сам дошел до решения.',
      text_2:
        'Почему выбирают меня? 🌟\n\n🧩 Говорю с учениками на понятном им языке.\n🔍 Объясняю сложные темы просто, четко и доступно.\n🎯 Помогаю не просто решать задачи, а понимать сам предмет.\n💡 Создаю комфортную атмосферу, в которой ребенок не боится ошибаться.\n🚀 Мотивирую и показываю, что математика — это интересно!\n\nКогда ученик с легкостью решает то, что еще недавно казалось ему сложным, — это лучшая награда для меня.\n\n💖 Уверена: математика может быть понятной и увлекательной, если преподаватель вкладывает душу в процесс обучения. Буду рада помочь вашему ребенку раскрыть его способности и поверить в себя! 😊',
    },
    services: {
      title: 'Услуги',
      options: {
        myHome: {
          id: 1,
          type: 'У репетитора',
          content: {
            title: 'Формат занятий у репетитора дома (1300 рублей за занятие) 🏡',
            description:
              'Занятия у репетитора дома — отличный способ обучаться в спокойной и комфортной атмосфере, где всё внимание направлено только на вашего ребенка. Я буду рядом, чтобы помогать ему шаг за шагом разбираться в сложных темах, отвечать на все вопросы и направлять его к правильным решениям. Такой подход позволяет глубже понять материал и устранить все пробелы, а также развить уверенность в себе. 💪',
            features: [
              '👩‍🏫 Личное внимание и индивидуальный подход, позволяющий настроить уроки под нужды вашего ребенка.',
              '😌 Спокойная и продуктивная атмосфера, в которой ученик может не бояться ошибок и задавать все вопросы.',
              '📚 Визуальные пособия и наглядные материалы для лучшего усвоения информации.',
              '🧠 Возможность решать задачи в удобном темпе, наглядно объясняя каждое решение и показывая логику.',
            ],
            price: 1300,
            discount: 'На первое занятие и все уроки в период каникул — скидка 10%! 🎉📚✨',
            goal: 'Каждое занятие — это шаг к тому, чтобы ваш ребенок не просто понял теорию, но и научился применять её на практике. Вместе мы сможем преодолеть любые трудности и сделать математику не только понятной, но и увлекательной! 🎯',
            call_to_action:
              'Я буду рада помочь вашему ребенку раскрыть свои возможности и почувствовать, как приятно достигать новых вершин в учебе! 🌟',
          },
          slides: [
            {
              src: '/images/services/home/1.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
            {
              src: '/images/services/home/2.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
            {
              src: '/images/services/home/3.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
            {
              src: '/images/services/home/4.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
          ],
        },
        yourHome: {
          id: 2,
          type: 'С выездом',
          content: {
            title: 'Формат занятий с выездом (1500 рублей за занятие) 🚗',
            description:
              'Занятия с выездом — идеальный вариант для тех, кто хочет, чтобы репетитор приезжал прямо к вам домой. Я приеду к вам и проведу урок в удобной обстановке, уделяя внимание каждому моменту и создавая атмосферу для комфортного освоения математики. 📍\n\nЗанятия с выездом доступны в таких районах, как Бунинские Луга, Коммунарка, метро Потапово, Новомосковская и Бунинская аллея. 🗺️\n\nЗанятия на более дальние расстояния обсуждаются индивидуально. Стоимость таких занятий может изменяться в зависимости от времени, затраченного на дорогу туда и обратно, а также от удаленности района. 🚗⏳ Мы всегда найдем оптимальное решение, чтобы ваш ребенок получал качественные уроки без лишних неудобств!',
            features: [
              '🧑‍🏫 Персональный подход и внимание ко всем вопросам вашего ребенка. Занятие проходит в знакомой для него обстановке, что помогает сосредоточиться и не отвлекаться.',
              '💡 Уроки, построенные так, чтобы ребенок понимал связь одной темы с другой, логику изложения материала.',
              '🗣️ Возможность задавать вопросы и получать ответы прямо на месте — без лишних барьеров и задержек.',
              '🌱 Спокойная и продуктивная атмосфера для эффективного усвоения материала.',
            ],
            price: 1500,
            discount: 'На первое занятие и все уроки в период каникул — скидка 10%! 🎉📚✨',
            goal: 'Я всегда готова приехать и создать комфортные условия для обучения, где ваш ребенок сможет разобраться в сложных темах и полюбить математику. Вместе мы сделаем так, чтобы он чувствовал себя уверенно и с каждым занятием становился все сильнее в этом важном предмете. 🎓',
            call_to_action:
              'Занятия с выездом — это прекрасная возможность для вашего ребенка получать знания в удобной для него среде, не выходя из дома, и при этом добиваться высоких результатов в математике! Я с удовольствием помогу раскрыть его потенциал и увлечь математикой! 🌟',
          },
          slides: [
            {
              src: '/images/services/your-home/1.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
            {
              src: '/images/services/your-home/2.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
          ],
        },
        online: {
          id: 3,
          type: 'Онлайн',
          content: {
            title: 'Формат онлайн-занятий (1000 рублей за занятие) 💻',
            description:
              'Онлайн-занятия — удобный и гибкий способ обучения, который идеально подходит для тех, кто ценит комфорт и экономит время, не выходя из дома. В этом формате мы будем использовать самые современные инструменты для обучения, включая онлайн-доски с общим доступом, чтобы вам было легко и интересно работать вместе со мной. Мы сможем обмениваться заметками, рисовать схемы и решать задачи в реальном времени — всё это поможет сделать процесс обучения максимально интерактивным и увлекательным! ✍️',
            features: [
              '💬 Занятия через удобные платформы (Zoom, Skype, Discord и другие), где легко задать вопросы и обсудить сложные моменты.',
              '📝 Совместное использование онлайн-доски, которая помогает не только объяснять, но и визуализировать задачи — идеальный способ для наглядного восприятия материала.',
              '⏰ Гибкость: вам не нужно тратить время на дорогу, а сам урок можно проводить в комфортной обстановке вашего дома.',
              '🎮 Множество интерактивных материалов и заданий, которые делают изучение математики увлекательным и доступным для каждого.',
            ],
            price: 1000,
            discount: 'На первое занятие и все уроки в период каникул — скидка 10%! 🎉📚✨',
            goal: 'Мы начнем с первого занятия, чтобы узнать больше о сильных и слабых сторонах ученика, определить, какие темы вызывают трудности, и построить индивидуальный план обучения. Моя задача — не просто помочь решить задачи, а сделать так, чтобы математика стала понятной! 🌟',
            call_to_action:
              'Пусть ваш ребенок почувствует, как приятно и увлекательно решать задачи и находить правильные решения, а я помогу ему поверить в свои силы! 🚀',
          },
          slides: [
            {
              src: '/images/services/online/1.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
            {
              src: '/images/services/online/2.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
            {
              src: '/images/services/online/3.webp',
              alt: 'Рабочее место',
              width: 4032,
              height: 3024,
            },
          ],
        },
      },
    },
    reviews: {
      title: 'Отзывы',
      list: [
        {
          name: 'Ольга Иванова',
          about: 'мама ученика 6 класса',
          review:
            'Мы очень рады, что нашли Софью Алексеевну! Мой сын всегда боялся математики, но с её помощью он начал получать хорошие оценки. Она объясняет всё понятно и доступно, всегда находит подход к ребёнку. Спасибо за терпение и поддержку!',
          image: '/images/reviews/users/user_0.webp',
        },
        {
          name: 'Максим Третьяков',
          about: 'ученик 5 класса',
          review:
            'Хороший учитель! Иногда сложно, но потом понятно. Объясняет нормально, лучше, чем в школе.',
          image: '/images/reviews/users/user_1.webp',
        },
        {
          name: 'Дима Сидоров',
          about: 'ученик 7 класса',
          review:
            'Я раньше совсем не понимал, как решать задачи, но теперь всё стало проще. Софья Алексеевна объясняет так, что становится понятно даже самое сложное.',
          image: '/images/reviews/users/user_2.webp',
        },
        {
          name: 'Олег Петров',
          about: 'папа ученика 6 класса',
          review:
            'Я сам в школе математику не любил, сын тоже не особо. Но Софья Алексеевна как-то смогла его заинтересовать. Не скажу, что теперь отличник, но хоть двойки перестали приходить.',
          image: '/images/reviews/users/user_3.webp',
        },
        {
          name: 'Марина Лебедева',
          about: 'мама ученицы 5 класса',
          review:
            'Большое спасибо Софье Алексеевне за её профессионализм и подход к детям! Моя дочь стала гораздо увереннее в математике.',
          image: '/images/reviews/users/user_4.webp',
        },
        {
          name: 'Артём Малышев',
          about: 'ученик 8 класса',
          review:
            'Мне нравится, что можно спрашивать, когда не понятно. В школе иногда стесняюсь, а тут не страшно.',
          image: '/images/reviews/users/user_5.webp',
        },
        {
          name: 'Никита Васильев',
          about: 'ученик 7 класса',
          review:
            'Математика с Софьей Алексеевной - это весело и понятно! Очень благодарен за помощь!',
          image: '/images/reviews/users/user_6.webp',
        },
        {
          name: 'Наталья Сергеева',
          about: 'мама ученицы 5 класса',
          review:
            'Дочка говорит, что на уроках интересно, значит, хороший учитель. Раньше ненавидела задачи, теперь просто не любит. Прогресс!',
          image: '/images/reviews/users/user_7.webp',
        },
        {
          name: 'Мария Иванова',
          about: 'мама ученика 5 класса',
          review:
            'Сын не хочет признавать, но я вижу, что стал лучше разбираться в математике. Софья Алексеевна молодец, терпеливая, а ему только такого учителя и надо.',
          image: '/images/reviews/users/user_0.webp',
        },
        {
          name: 'Анна Соколова',
          about: 'мама ученицы 6 класса',
          review:
            'Софья Алексеевна очень добрая, дочка не боится спрашивать. Хотелось бы, чтобы и в школе так объясняли.',
          image: '/images/reviews/users/user_1.webp',
        },
      ],
    },
    contacts: {
      title: 'Контакты',
      telegram: 'https://t.me/sonechka_ger',
      phone: '+79116951932',
      phone_separator: '+7-911-695-19-32',
      mail: 'sonyager.22@gmail.com',
      help: 'Место проведения уроков и связь:',
      formName: 'Как к вам обращаться?',
      formMessage: 'Записаться на пробный урок',
      formSuccess: 'Готово!',
      formFailed: 'Ошибка при отправке',
      formSend: 'Записаться',
      formCaptcha: 'Подтвердите что вы не робот',
      formPhone: 'Введите корректный номер',
      place: 'Москва, ЖК Бунинские Луга, улица Александры Монаховой, 84к1, подъезд 4',
      place_link:
        'https://yandex.com/maps/geo/zhk_buninskiye_luga_2_4_1_podyezd_4/4204727603/?from=mapframe&ll=37.483346%2C55.545213&z=19',
      owner: '© 2025 Герасимова Софья Алексеевна.',
      license: 'Все права защищены.',
      developer: 'Разработка:',
      developer_name: 'dangor',
      developer_link: 'https://www.dangor.ru/',
    },
  },
];

export default defaultContent;
