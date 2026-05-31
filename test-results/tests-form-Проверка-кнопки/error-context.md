# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\form.spec.js >> Проверка кнопки
- Location: tests\form.spec.js:11:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#submitBtn')
Timeout: 5000ms
- Expected  - 1
+ Received  + 3

- Отправить
+
+                 Сломано
+             

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#submitBtn')
    14 × locator resolved to <button type="submit" id="submitBtn">↵                Сломано↵            </button>
       - unexpected value "
                Сломано
            "

```

```yaml
- button "Сломано"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Проверка заголовка', async ({ page }) => {
  4  | 
  5  |     await page.goto('file:///C:/Users/glora/Desktop/Тестирование ПО/lab11/index.html');
  6  | 
  7  |     await expect(page.locator('h1'))
  8  |         .toHaveText('Форма обратной связи');
  9  | });
  10 | 
  11 | test('Проверка кнопки', async ({ page }) => {
  12 | 
  13 |     await page.goto('file:///C:/Users/glora/Desktop/Тестирование ПО/lab11/index.html');
  14 | 
  15 |     await expect(page.locator('#submitBtn'))
> 16 |         .toHaveText('Отправить');
     |          ^ Error: expect(locator).toHaveText(expected) failed
  17 | });
  18 | 
  19 | test('Проверка полей формы', async ({ page }) => {
  20 | 
  21 |     await page.goto('file:///C:/Users/glora/Desktop/Тестирование ПО/lab11/index.html');
  22 | 
  23 |     await expect(page.locator('#name')).toBeVisible();
  24 | 
  25 |     await expect(page.locator('#email')).toBeVisible();
  26 | });
  27 | 
  28 | test('Проверка отправки формы', async ({ page }) => {
  29 | 
  30 |     await page.goto('file:///C:/Users/glora/Desktop/Тестирование ПО/lab11/index.html');
  31 | 
  32 |     await page.fill('#name', 'Admin');
  33 | 
  34 |     await page.fill('#email', 'admin@test.com');
  35 | 
  36 |     await page.click('#submitBtn');
  37 | 
  38 |     await expect(page.locator('#message'))
  39 |         .toHaveText('Форма успешно отправлена!');
  40 | });
```