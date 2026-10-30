import { test } from 'node:test';
import assert from 'node:assert/strict';
import { primaryCopy } from '../app/primary-copy';
import { pricingCopy } from '../app/pricing-copy';
import { previewMetaCopy } from '../lib/preview-metadata';
import { leaves } from './leaves';

const dictionaries = {
  primaryCopy,
  pricingCopy,
  previewMetaCopy,
} as Record<string, Record<'ru' | 'en' | 'pt', unknown>>;

test('ru and pt have exactly the keys of en', () => {
  for (const [name, dictionary] of Object.entries(dictionaries)) {
    const expected = [...leaves(dictionary.en).keys()].sort();
    for (const language of ['ru', 'pt'] as const) {
      assert.deepEqual(
        [...leaves(dictionary[language]).keys()].sort(),
        expected,
        `${name}.${language}`,
      );
    }
  }
});

test('pt text has no Cyrillic and no empty strings', () => {
  for (const [name, dictionary] of Object.entries(dictionaries)) {
    for (const [path, text] of leaves(dictionary.pt)) {
      if (!/\.soon$/.test(path)) assert.notEqual(text, '', `${name}.${path}`);
      assert.doesNotMatch(text, /[А-Яа-яЁё]/, `${name}.${path}`);
    }
  }
});

test('pt strings of 30+ characters differ from en', () => {
  for (const [name, dictionary] of Object.entries(dictionaries)) {
    const en = leaves(dictionary.en);
    for (const [path, text] of leaves(dictionary.pt)) {
      if (text.length < 30 || text.startsWith('http')) continue;
      assert.notEqual(text, en.get(path), `${name}.${path}`);
    }
  }
});

test('fixed pt values', () => {
  assert.deepEqual(primaryCopy.pt.headline, [
    'Aproveita a vida.',
    'A Sasha trata da comida.',
  ]);
  assert.equal(pricingCopy.pt.starsPrice, '1500 ⭐');
  assert.equal(pricingCopy.pt.estimate, '≈ 33 € por mês');
  assert.equal(pricingCopy.pt.estimateSource, pricingCopy.en.estimateSource);
  assert.equal(
    previewMetaCopy.pt.title,
    'Mealset — Aproveita a vida. A Sasha trata da comida.',
  );
  assert.equal(
    previewMetaCopy.pt.imageAlt,
    'Mealset. Aproveita a vida. A Sasha trata da comida. Hábitos alimentares saudáveis. Menos registo manual.',
  );
});
