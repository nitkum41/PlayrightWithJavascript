import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').dblclick();
  await page.locator('#loginpassword').fill('admin');
  await page.getByLabel('Log in').getByText('Close').click();
});