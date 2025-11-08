import { test } from '@playwright/test';
import { step } from 'allure-js-commons';

test('Sauce Demo Login Test', async({ page }) => {
    await step('User is navigated to Saucedemo login page', async () => {
        await page.goto("https://www.saucedemo.com/");
    });

    await step('User is entering username in the username field', async () => {
        await page.locator('#user-name').fill('standard_user');
    });

    await step('User is entering password in the password field', async () => {
        await page.locator('#password').fill('secret_sauce');
    });

    await step('User is clicking the login button to proceed', async () => {
        await page.locator('#login-button').click();
    });

    await step('User is verifying that the product page is displayed after successful login', async () => {
        await page.locator('.title').isVisible();
    });
});