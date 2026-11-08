const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');

test('page exposes Russian venue details and contact links', () => {
  for (const expected of ['lang="ru"', '10:00', '22:00', '500', '800', '1 000', '+7 928 343-72-07', 'пр. 22 Партсъезда, 9/1', 'ТЦ «Мар»', 'ВКонтакте', 'Telegram']) {
    assert.ok(html.includes(expected), `Missing page detail: ${expected}`);
  }
  assert.match(html, /href="tel:\+79283437207"/);
  assert.match(html, /href="https:\/\/t\.me\/ostrovok_radosti_dizardi"/);
  assert.match(html, /href="https:\/\/vk\.ru\/ostrovok_radosti_dizardi"/);
});

test('page includes accessible map, navigation, and mobile menu states', () => {
  assert.match(html, /aria-label="Главная навигация"/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /aria-labelledby="hero-title"/);
  assert.match(html, /aria-label="Карта игровых зон второго этажа/);
  assert.match(js, /setAttribute\('aria-expanded'/);
  assert.match(js, /mobileNav\.hidden = true/);
});

test('layout supports narrow screens and reduced-motion preferences', () => {
  assert.match(css, /@media\(max-width:680px\)/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
});
