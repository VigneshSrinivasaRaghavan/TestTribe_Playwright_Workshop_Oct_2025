import { test, expect } from '@playwright/test';

test('Single Static', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('button.fc-cta-consent').click();
    await page.selectOption('#Skills', { value: 'Analytics' });
    await page.waitForTimeout(3000);
    await page.selectOption('#Skills', { label: 'Art Design' });
    await page.waitForTimeout(3000);
    await page.selectOption('#Skills', { index: 5 }); // Not Preferred
    await page.waitForTimeout(3000);
});

test('Multi Static', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select', [
        { value: 'California' },
        { label: 'Florida' },
        { index: 3 } // Not Preferred
    ]);
    await page.waitForTimeout(5000);
});

test('Searchable Dynamic', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('button.fc-cta-consent').click();

    await page.locator('span[role="combobox"]').click();
    await page.locator('input[type="search"]').fill('India');
    await page.locator('ul#select2-country-results>li').click();
    await page.waitForTimeout(3000);
});

test('Non Searchable Dynamic', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('button.fc-cta-consent').click();

    await page.locator('span[role="combobox"]').click();
    await page.locator('ul#select2-country-results>li',{hasText: 'Denmark'}).click();
    await page.waitForTimeout(3000);
});