import { test } from '@playwright/test';

test('Using Fill method', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
});

test('Using Press method', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('input[name="password"]').press('Enter');
});

test('Using Press Sequential with delay method', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').pressSequentially('Admin',{delay: 1000});
    await page.locator('input[name="password"]').pressSequentially('admin123',{delay: 1000});
    await page.locator('button[type="submit"]').click();
});