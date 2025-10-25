import { test, expect } from '@playwright/test';

test('Visble/Hidden Assertion', async ({ page }) => {
await page.goto('https://www.letskodeit.com/practice');

// Default state of the textbox is visible
await expect(page.locator('#displayed-text')).toBeVisible();

// Action to turn the textbox hidden
await page.locator('#hide-textbox').click();
await expect(page.locator('#displayed-text')).toBeHidden();

// Action to turn the textbox visible again
await page.locator('#show-textbox').click();
await expect(page.locator('#displayed-text')).toBeVisible();
});

test('Present/NotPresent Assertion', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
await expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(0);

await page.locator('button[onclick="addElement()"]').click();
await page.locator('button[onclick="addElement()"]').click();
await expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(2);

await page.locator('(//button[@onclick="deleteElement()"])[2]').click();
await expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);

await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
await expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(0);

});

test('Enabled/Disabled Assertion', async ({ page }) => {
await page.goto('https://letcode.in/button');
await expect(page.locator('#home')).toBeEnabled();
await expect(page.locator('button[title="Disabled button"]')).toBeDisabled();
});

test('Text Match/Mismatch Assertion', async ({ page }) => {
await page.goto('https://letcode.in/button');
await expect(page.locator('#home')).toHaveText('Goto Home');
await expect(page.locator('#home')).not.toHaveText('Vignesh');
});

test('URL Assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    // FULL URL ASSERTION
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    // Partial URL ASSERTION
    await expect(page).toHaveURL(/dashboard/)
});

test('Title Assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // FULL Title ASSERTION
    await expect(page).toHaveTitle('OrangeHRM')

    // Partial Title ASSERTION
    await expect(page).toHaveTitle(/Orange/)
});