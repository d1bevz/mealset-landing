import { test } from 'node:test';
import assert from 'node:assert/strict';
import { demoContent } from '../app/primary-demo-copy';
import { demoVisual } from '../app/primary-demo-visuals';
import { leaves } from './leaves';

const en = leaves(demoContent('en'));
const pt = leaves(demoContent('pt'));

test('pt demo content has the same structure as en', () => {
  assert.deepEqual([...pt.keys()].sort(), [...en.keys()].sort());
});

test('pt demo text has no Cyrillic and no empty strings', () => {
  for (const [path, text] of pt) {
    assert.notEqual(text, '', path);
    assert.doesNotMatch(text, /[А-Яа-яЁё]/, path);
  }
});

test('pt demo strings of 30+ characters differ from en', () => {
  for (const [path, text] of pt) {
    if (text.length >= 30) assert.notEqual(text, en.get(path), path);
  }
});

test('numbers survive translation', () => {
  const digits = (text: string) => (text.match(/\d+/g) ?? []).sort().join(',');
  for (const [path, text] of pt) {
    const source = (en.get(path) ?? '').replace(/(\d),(\d{3})\b/g, '$1$2');
    assert.equal(digits(text), digits(source), path);
  }
});

test('demoVisual returns alt and caption for all six scenarios in pt', () => {
  for (let index = 0; index < 6; index++) {
    const visual = demoVisual(index, 'pt');
    assert.equal(visual.file, demoVisual(index, 'en').file);
    for (const text of [visual.alt, visual.caption]) {
      assert.notEqual(text, '');
      assert.doesNotMatch(text, /[А-Яа-яЁё]/);
    }
    assert.notEqual(visual.alt, demoVisual(index, 'en').alt);
  }
});

test('plural agreement in the swapped-breakfast note', () => {
  const texts = [...pt.values()];
  assert.ok(texts.some((text) => text.includes('já comidos')));
  assert.ok(!texts.some((text) => text.includes('já comido.')));
});
