import type { Locale } from '../copy';
const researchCopy = {
  ru: {
    promise: 'Ты рассказываешь об обеде. Саша берёт на себя дневник.',
    title: 'Почему мы убрали ручную рутину',
    body: 'Обзор 28 научных публикаций выделяет затраты времени и сложность ввода среди барьеров к использованию приложений для питания. Саша берёт на себя подбор продуктов и расчёты, чтобы тебе не приходилось заполнять каждую позицию самостоятельно.',
    source: 'Исследование, 2021',
    note: 'Обзор описывает трудности пользователей; скорость работы Саши в нём не измерялась.',
  },
  en: {
    promise: 'You describe your meal. Sasha takes care of the diary.',
    title: 'Why we took out the manual work',
    body: 'A review of 28 research publications identifies time demands and difficult data entry among the barriers to using nutrition apps. Sasha handles food matching and calculations, so you do not have to enter each item yourself.',
    source: 'Research review, 2021',
    note: 'The review describes user difficulties; it did not measure how quickly Sasha works.',
  },
};
export function Comparison({ locale }: { locale: Locale }) {
  const d = researchCopy[locale];
  return (
    <div className="cx-inline" id="comparison">
      <p className="cx-promise">{d.promise}</p>
      <details className="cx-research">
        <summary>{d.title}</summary>
        <p>
          {d.body}{' '}
          <a
            href="https://mhealth.jmir.org/2021/6/e20037"
            target="_blank"
            rel="noreferrer"
          >
            {d.source}
          </a>
          .
        </p>
        <p>{d.note}</p>
      </details>
    </div>
  );
}
