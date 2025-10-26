import { test, expect } from '@playwright/test';

test('Simple Alert Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toBe("I am a JS Alert");
        await alert.accept();
    })
    await page.locator('button[onclick="jsAlert()"]').click();
    // Optional Verification
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

// Confirmation Ok == Simple Alert Test
test('Confirmation - Ok Alert Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toBe("I am a JS Confirm");
        await alert.accept();
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    // Optional Verification
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});

test('Confirmation - Cancel Alert Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toBe("I am a JS Confirm");
        await alert.dismiss();
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    // Optional Verification
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});

test('Prompt Alert - Ok button Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toBe("I am a JS prompt");
        await alert.accept('Vignesh');
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
    // Optional Verification
    await expect(page.locator('#result')).toHaveText('You entered: Vignesh');
});

test('Prompt Alert - Cancel button Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async (alert) => {
        const alertMessage = alert.message();
        expect(alertMessage).toBe("I am a JS prompt");
        await alert.dismiss();
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
    // Optional Verification
    await expect(page.locator('#result')).toHaveText('You entered: null');
});