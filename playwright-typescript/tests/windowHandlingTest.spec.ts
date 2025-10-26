import { test, expect } from '@playwright/test';

test('Single Tab Handling Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('button.fc-cta-consent').click();
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")')
    ]);
    await newTab.waitForLoadState();
    await newTab.locator('.DocSearch-Button-Placeholder').click();
    await newTab.locator('.DocSearch-Input').fill('Locator strategies');

    await page.bringToFront(); // To bring the focus
    await page.locator('a[href="Index.html"]').click();
});

test('Single Window Handling Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('button.fc-cta-consent').click();
    await page.click('a:has-text("Open New Seperate Windows")');

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newwindow()"]')
    ]);
    await newWindow.waitForLoadState();
    await newWindow.locator('.DocSearch-Button-Placeholder').click();
    await newWindow.locator('.DocSearch-Input').fill('Locator strategies');

    await page.bringToFront(); // To bring the focus
    await page.locator('a[href="Index.html"]').click();
});

test('Multi Tab Handling Test', async ({ page }) => {
     await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('button.fc-cta-consent').click();
    await page.click('a:has-text("Open Seperate Multiple Windows")');

    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')
    ]);
    await multipleTab.waitForLoadState();
    await page.waitForTimeout(2000); // Added wait to ensure all tabs are loaded

    const pages = multipleTab.context().pages();
    //pages[0] ==> page; // Main Page
    await pages[1].bringToFront();
    await pages[1].locator('#email').fill('test@example.com');
    await pages[1].locator('#enterimg').click();

    await pages[2].bringToFront();
    await pages[2].locator('.DocSearch-Button-Placeholder').click();
    await pages[2].locator('.DocSearch-Input').fill('Locator strategies');

    await page.bringToFront(); // To bring the focus
    await page.locator('a[href="Index.html"]').click();
});

// Assignment Multi Tab and Window handling - https://www.hyrtutorials.com/p/window-handles-practice.html