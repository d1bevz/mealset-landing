import type { Locale } from './copy';

export const demoVisuals = [
  {
    file: 'demo-breakfast.webp',
    ru: ['Яйца, картофель и куриная нарезка на тарелке', 'Завтрак из примера'],
    en: [
      'Scrambled eggs, potatoes and chicken slices on a plate',
      'The breakfast in this example',
    ],
  },
  {
    file: 'demo-smoothie.webp',
    ru: [
      'Зелёный смузи рядом с манго, авокадо и шпинатом',
      'Тот самый привычный смузи',
    ],
    en: [
      'Green smoothie with mango, avocado and spinach alongside',
      'Your familiar smoothie',
    ],
  },
  {
    file: 'demo-containers.webp',
    ru: [
      'Две порции лосося с рисом в контейнерах',
      'Два обеда за одну готовку',
    ],
    en: [
      'Two portions of salmon and rice in food containers',
      'Cook once, lunch twice',
    ],
  },
  {
    file: 'demo-plan.webp',
    ru: [
      'Запеканка из пасты с фаршем и индейка с грибами и бататом',
      'Два разных ужина из плана',
    ],
    en: [
      'Pasta and mince bake beside turkey with mushrooms and sweet potato',
      'Two different dinners from the plan',
    ],
  },
  {
    file: 'demo-shopping.webp',
    ru: [
      'Бананы, яйца, рис, картофель, хлеб и овощи после покупки',
      'Часть продуктов из списка',
    ],
    en: [
      'Bananas, eggs, rice, potatoes, bread and vegetables after shopping',
      'A few items from your shopping list',
    ],
  },
  {
    file: 'demo-snack.webp',
    ru: [
      'Миска скира с нарезанным бананом рядом с ноутбуком',
      'Перекус перед следующим созвоном',
    ],
    en: [
      'A bowl of skyr with sliced banana beside a laptop',
      'A snack before your next call',
    ],
  },
] as const;

export function demoVisual(index: number, locale: Locale) {
  const visual = demoVisuals[index] ?? demoVisuals[0];
  return {
    file: visual.file,
    alt: visual[locale][0],
    caption: visual[locale][1],
  };
}
