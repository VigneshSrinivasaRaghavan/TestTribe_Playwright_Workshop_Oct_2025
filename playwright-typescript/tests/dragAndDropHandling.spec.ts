import { test, expect } from '@playwright/test';

test('Drag And Drop - Approach 1', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');
  await page.locator('button.fc-cta-consent').click();

  const draggableElement = page.locator('#angular');
  const draggableElement2 = page.locator('#mongo');
  const droppableElement = page.locator('#droparea');

  await draggableElement.hover();
  await page.mouse.down();
  await droppableElement.hover();
  await page.mouse.up();

  // await draggableElement2.hover();
  // await page.mouse.down();
  // await droppableElement.hover();
  // await page.mouse.up();

  await page.waitForTimeout(5000);
});

test('Drag And Drop - Approach 2', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');
  await page.locator('button.fc-cta-consent').click();

  const draggableElement = page.locator('#angular');
  const draggableElement2 = page.locator('#mongo');
  const droppableElement = page.locator('#droparea');

  await draggableElement.dragTo(droppableElement);
});