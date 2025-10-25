import { test, expect } from '@playwright/test';

test('Radio Button Test', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Register.html');
await page.locator('button.fc-cta-consent').click();

const maleRadioButton = page.locator('input[value="Male"]');
const femaleRadioButton = page.locator('input[value="FeMale"]');

// Default state - none selected
await expect(maleRadioButton).not.toBeChecked();
await expect(femaleRadioButton).not.toBeChecked();

// Select Male radio button
await maleRadioButton.check();
await expect(maleRadioButton).toBeChecked();
await expect(femaleRadioButton).not.toBeChecked();

// Select Female radio button
await femaleRadioButton.check();
await expect(femaleRadioButton).toBeChecked();
await expect(maleRadioButton).not.toBeChecked();
});