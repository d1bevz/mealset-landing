import type { PrimaryLocale } from '@/lib/primary-locales';

export const demoVisuals = [
  {
    file: 'demo-breakfast.webp',
    ru: ['Яйца, картофель и куриная нарезка на тарелке', 'Завтрак из примера'],
    en: [
      'Scrambled eggs, potatoes and chicken slices on a plate',
      'The breakfast in this example',
    ],
    pt: [
      'Ovos mexidos, batatas e fatias de frango num prato',
      'O pequeno-almoço deste exemplo',
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
    pt: [
      'Batido verde com manga, abacate e espinafres ao lado',
      'O teu batido habitual',
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
    pt: [
      'Duas porções de salmão e arroz em recipientes',
      'Cozinha uma vez, almoça duas',
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
    pt: [
      'Gratinado de massa e carne picada ao lado de peru com cogumelos e batata-doce',
      'Dois jantares diferentes do plano',
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
    pt: [
      'Bananas, ovos, arroz, batatas, pão e legumes depois das compras',
      'Alguns itens da tua lista de compras',
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
    pt: [
      'Uma taça de skyr com banana às rodelas ao lado de um portátil',
      'Um lanche antes da próxima chamada',
    ],
  },
] as const;

export function demoVisual(index: number, locale: PrimaryLocale) {
  const visual = demoVisuals[index] ?? demoVisuals[0];
  return {
    file: visual.file,
    alt: visual[locale][0],
    caption: visual[locale][1],
  };
}
