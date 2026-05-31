const { test, expect } = require('@playwright/test');

test('Проверка заголовка', async ({ page }) => {

    await page.goto('file:///C:/Users/glora/Desktop/Тестирование ПО/lab11/index.html');

    await expect(page.locator('h1'))
        .toHaveText('Форма обратной связи');
});

test('Проверка кнопки', async ({ page }) => {

    await page.goto('file:///C:/Users/glora/Desktop/Тестирование ПО/lab11/index.html');

    await expect(page.locator('#submitBtn'))
        .toHaveText('Отправить');
});

test('Проверка полей формы', async ({ page }) => {

    await page.goto('file:///C:/Users/glora/Desktop/Тестирование ПО/lab11/index.html');

    await expect(page.locator('#name')).toBeVisible();

    await expect(page.locator('#email')).toBeVisible();
});

test('Проверка отправки формы', async ({ page }) => {

    await page.goto('file:///C:/Users/glora/Desktop/Тестирование ПО/lab11/index.html');

    await page.fill('#name', 'Admin');

    await page.fill('#email', 'admin@test.com');

    await page.click('#submitBtn');

    await expect(page.locator('#message'))
        .toHaveText('Форма успешно отправлена!');
});