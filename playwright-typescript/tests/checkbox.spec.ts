import { test, expect } from '@playwright/test';

test('Radio Button Test', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
await page.locator('button.fc-cta-consent').click();

const cricketCheckbox = page.locator('#checkbox1');
const moviesCheckbox = page.locator('#checkbox2');
const hockeyCheckbox = page.locator('#checkbox3');

// Default state - none selected
await expect(cricketCheckbox).not.toBeChecked();
await expect(moviesCheckbox).not.toBeChecked();
await expect(hockeyCheckbox).not.toBeChecked();

// Select Cricket and Hockey checkboxes
await cricketCheckbox.check();
await hockeyCheckbox.check();
await expect(cricketCheckbox).toBeChecked();
await expect(hockeyCheckbox).toBeChecked();
await expect(moviesCheckbox).not.toBeChecked();

// Deselect Cricket and Hockey checkboxes
await cricketCheckbox.uncheck();
await hockeyCheckbox.uncheck();
await expect(cricketCheckbox).not.toBeChecked();
await expect(hockeyCheckbox).not.toBeChecked();
await expect(moviesCheckbox).not.toBeChecked();
});