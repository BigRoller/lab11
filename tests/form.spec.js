const { test, expect } = require('@playwright/test');
const path = require('path');

const filePath = 'file://' + path.join(__dirname, '..', 'index.html');

test('Проверка заголовка', async ({ page }) => {

    await page.goto(filePath);

    await expect(page.locator('h1'))
        .toHaveText('Форма обратной связи');
});

test('Проверка кнопки', async ({ page }) => {

    await page.goto(filePath);

    await expect(page.locator('#submitBtn'))
        .toHaveText('Отправить');
});

test('Проверка полей', async ({ page }) => {

    await page.goto(filePath);

    await expect(page.locator('#name')).toBeVisible();

    await expect(page.locator('#email')).toBeVisible();
});

test('Проверка отправки формы', async ({ page }) => {

    await page.goto(filePath);

    await page.fill('#name', 'Admin');

    await page.fill('#email', 'admin@test.com');

    await page.click('#submitBtn');

    await expect(page.locator('#message'))
        .toHaveText('Форма успешно отправлена!');
});