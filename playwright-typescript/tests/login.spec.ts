import { test } from '@playwright/test';

test('Orange Hrm Login Test', async({ page }) => {
    // Navigate to the OrangeHRM demo site
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Enter username
    await page.locator('input[name="username"]').fill('Admin');

    // Enter password
    await page.locator('input[name="password"]').fill('admin123');

    // Click the login button
    await page.locator('button[type="submit"]').click();
});