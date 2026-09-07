import type { Locale } from './copy';

type Method = {
  id: 'text' | 'voice' | 'photo' | 'delivery';
  label: string;
  title: string;
  body: string;
  attachment: string | null;
  message: string;
  answer: string;
  result: string | null;
};
type FeatureCopy = {
  eyebrow: string;
  title: string[];
  intro: string;
  choose: string;
  database: string;
  sasha: string;
  chatLabel: string;
  methods: Method[];
  note: string;
  nutrientsLabel: string;
  nutrientsTitle: string;
  nutrientsBody: string;
  nutrients: string[];
  science: {
    eyebrow: string;
    title: string[];
    body: string;
    principles: { title: string; body: string }[];
    sourcesLabel: string;
    who: string;
    efsa: string;
  };
};

export const featureCopy: Record<Locale, FeatureCopy> = {
  ru: {
    eyebrow: 'ДНЕВНИК ПИТАНИЯ. ПРЯМО В TELEGRAM.',
    title: ['Ты ешь.', 'Саша записывает.'],
    intro:
      'Напиши, что съел, запиши голосовое, отправь фото или скриншот заказа из Uber Eats. Подбор продуктов и расчёт Саша берёт на себя.',
    choose: 'Как записать еду',
    database:
      'продуктов в базе. Саша сама найдёт нужные, вспомнит твои этикетки и поищет недостающее в интернете.',
    sasha: 'Саша',
    chatLabel: 'Пример записи еды',
    methods: [
      {
        id: 'text',
        label: 'Текстом',
        title: '«Около 200 граммов» — тоже понятно.',
        body: 'Пиши обычными словами: граммы на глаз, полчашки молока, четыре яйца. Саша разберёт ингредиенты, рассчитает КБЖУ и сохранит приём пищи. Если нужна деталь — уточнит.',
        attachment: null,
        message:
          'На завтрак картошка около 200 г, 10 г лука, 75 г ветчины из индейки и 4 яйца.',
        answer:
          'Нашла всё в базе. Ветчину из индейки помню — возьму данные с твоей этикетки. Завтрак записала. Если жарил на масле, скажи — добавлю.',
        result: '≈532 ккал · Б 40 г · Ж 21 г · У 44 г\nДиапазон: 419–645 ккал',
      },
      {
        id: 'voice',
        label: 'Голосом',
        title: 'Расскажи, пока занят своим днём.',
        body: 'Не обязательно печатать и заполнять поля. Отправь Саше голосовое в Telegram — она распознает речь и запишет еду так же, как из сообщения.',
        attachment: 'Голосовое · пример расшифровки',
        message:
          'На завтрак сделал смузи: манго, половина авокадо, две горсти шпината и примерно 300 граммов соевого молока.',
        answer:
          'Поняла: манго, половина авокадо, шпинат и соевое молоко. Подберу продукты и посчитаю завтрак. Вес фруктов возьму примерно — отмечу это в расчёте.',
        result: null,
      },
      {
        id: 'photo',
        label: 'По фото',
        title: 'Фото тарелки. Или этикетки.',
        body: 'Дома, в ресторане или на ходу. Саша распознает еду на фото, оценит порцию и найдёт ингредиенты. А с читаемой этикетки возьмёт данные конкретного продукта.',
        attachment: 'Фото ужина · паста с морепродуктами',
        message: 'Вот мой ужин.',
        answer:
          'Вижу пасту с креветками и мидиями в сливочном соусе. Всю порцию съел? По фото вес и количество соуса приблизительные — расчёт будет с диапазоном.',
        result: null,
      },
      {
        id: 'delivery',
        label: 'Скриншотом',
        title: 'Даже заказ из Uber Eats.',
        body: 'Пришли скриншот и скажи, что съел. Саша прочитает название блюда и ресторан, сама поищет состав и пищевую ценность. Если точных данных нет — оценит по ингредиентам.',
        attachment:
          'Uber Eats · Bullguer\n1 × Bullguer Duplo\n1 × Coca-Cola Zero, 330 мл',
        message: 'Поужинал вот этим.',
        answer:
          'Нашла двойной бургер и Cola Zero. Состав бургера проверила, но официальной пищевой ценности нет. Рассчитаю по ингредиентам и отмечу как оценку.',
        result: null,
      },
    ],
    note: 'Иллюстрации работы Саши. Ответы зависят от контекста. При примерных порциях расчёт тоже примерный.',
    nutrientsLabel: 'БОЛЬШЕ, ЧЕМ КБЖУ',
    nutrientsTitle: 'За калориями — целый рацион.',
    nutrientsBody:
      'Белки, жиры и углеводы — только начало. В базе есть ещё десятки показателей: клетчатка, сахара, витамины и минералы. Саша использует доступные данные о составе продуктов; полнота зависит от продукта и источника.',
    nutrients: [
      'Клетчатка',
      'Сахара',
      'Насыщенные жиры',
      'Кальций',
      'Железо',
      'Магний',
      'Калий',
      'Натрий',
      'Цинк',
      'Витамин A',
      'Витамин C',
      'Витамин D',
      'Витамин B12',
      'Фолат',
    ],
    science: {
      eyebrow: 'НАУЧНЫЙ ПОДХОД',
      title: ['Личное внимание.', 'Научная основа.'],
      body: 'Рекомендации Саши опираются на научные исследования и руководства по питанию. Она объясняет, почему совет подходит тебе, и учитывает, насколько надёжны данные.',
      principles: [
        {
          title: 'Опирается на доказательства.',
          body: 'Использует базу знаний с исследованиями, систематическими обзорами и рекомендациями профессиональных организаций.',
        },
        {
          title: 'Объясняет, откуда вывод.',
          body: 'Можно спросить «почему?». Саша объяснит логику, приведёт источник и скажет, если данных недостаточно или они противоречивы.',
        },
        {
          title: 'Знает границы.',
          body: 'Отделяет оценку от точных данных. Помогает с повседневным рационом, а вопросы диагностики и лечения направляет к врачу.',
        },
      ],
      sourcesLabel: 'Примеры научных ориентиров',
      who: 'ВОЗ · здоровое питание',
      efsa: 'EFSA · нормы потребления нутриентов',
    },
  },
  en: {
    eyebrow: 'YOUR FOOD DIARY. RIGHT IN TELEGRAM.',
    title: ['You eat.', 'Sasha logs it.'],
    intro:
      'Type what you ate, send a voice note, take a photo or share an Uber Eats screenshot. Sasha finds the foods and takes care of the calculation.',
    choose: 'Ways to log your food',
    database:
      'foods in the database. Sasha finds the right ones, remembers your labels and searches the web for missing information.',
    sasha: 'Sasha',
    chatLabel: 'Food logging example',
    methods: [
      {
        id: 'text',
        label: 'Text',
        title: '“About 200 grams” works too.',
        body: 'Use everyday words: approximate weights, half a cup of milk, four eggs. Sasha identifies the ingredients, calculates calories and macros, and saves your meal. She’ll ask if she needs a detail.',
        attachment: null,
        message:
          'Breakfast: about 200 g of potatoes, 10 g of onion, 75 g of turkey ham and 4 eggs.',
        answer:
          'Found everything in the database. I remember your turkey ham — I’ll use the label you shared. Breakfast logged. If you cooked with oil, tell me and I’ll add it.',
        result:
          '≈532 kcal · P 40 g · F 21 g · C 44 g\nEstimated range: 419–645 kcal',
      },
      {
        id: 'voice',
        label: 'Voice',
        title: 'Tell her as you go.',
        body: 'No need to type or fill in fields. Send Sasha a Telegram voice note. She transcribes your words and logs the food just as she would from a message.',
        attachment: 'Voice note · example transcript',
        message:
          'I made a smoothie for breakfast: a mango, half an avocado, two handfuls of spinach and about 300 grams of soy milk.',
        answer:
          'Got it: mango, half an avocado, spinach and soy milk. I’ll find the foods and calculate breakfast. I’ll estimate the fruit weights and mark that in the calculation.',
        result: null,
      },
      {
        id: 'photo',
        label: 'Photo',
        title: 'A photo of your plate. Or its label.',
        body: 'At home, at a restaurant or on the go. Sasha identifies the food, estimates the portion and finds the ingredients. A legible label gives her the figures for your exact product.',
        attachment: 'Dinner photo · seafood pasta',
        message: 'Here’s my dinner.',
        answer:
          'I can see pasta with prawns and mussels in a cream sauce. Did you eat the whole portion? The weight and sauce quantity are approximate from a photo, so I’ll give you an estimated range.',
        result: null,
      },
      {
        id: 'delivery',
        label: 'Screenshot',
        title: 'Even your Uber Eats order.',
        body: 'Send a screenshot and say what you ate. Sasha reads the dish and restaurant, then looks up ingredients and nutrition herself. If exact figures aren’t available, she estimates from the ingredients.',
        attachment:
          'Uber Eats · Bullguer\n1 × Bullguer Duplo\n1 × Coca-Cola Zero, 330 ml',
        message: 'This was my dinner.',
        answer:
          'Found the double burger and Cola Zero. I checked the burger’s ingredients, but there’s no official nutrition information. I’ll calculate it from the ingredients and mark it as an estimate.',
        result: null,
      },
    ],
    note: 'Illustrations of how Sasha works. Replies depend on context. Approximate portions produce approximate calculations.',
    nutrientsLabel: 'BEYOND CALORIES AND MACROS',
    nutrientsTitle: 'There’s more to your food.',
    nutrientsBody:
      'Protein, fat and carbohydrates are just the start. The database holds dozens more measures, including fibre, sugars, vitamins and minerals. Sasha uses the available food composition data; coverage varies by food and source.',
    nutrients: [
      'Fibre',
      'Sugars',
      'Saturated fat',
      'Calcium',
      'Iron',
      'Magnesium',
      'Potassium',
      'Sodium',
      'Zinc',
      'Vitamin A',
      'Vitamin C',
      'Vitamin D',
      'Vitamin B12',
      'Folate',
    ],
    science: {
      eyebrow: 'GROUNDED IN SCIENCE',
      title: ['Personal attention.', 'Scientific foundations.'],
      body: 'Sasha’s recommendations draw on nutrition research and guidelines. She explains why a suggestion fits your situation and takes the strength of the evidence into account.',
      principles: [
        {
          title: 'Starts with evidence.',
          body: 'Uses a knowledge base of studies, systematic reviews and guidelines from professional organisations.',
        },
        {
          title: 'Explains the reasoning.',
          body: 'You can always ask why. Sasha explains the logic, gives a source and says when the evidence is limited or conflicting.',
        },
        {
          title: 'Knows her limits.',
          body: 'Distinguishes estimates from exact figures. Helps with everyday nutrition and refers questions about diagnosis and treatment to a doctor.',
        },
      ],
      sourcesLabel: 'Examples of scientific references',
      who: 'WHO · healthy diet',
      efsa: 'EFSA · dietary reference values',
    },
  },
};
