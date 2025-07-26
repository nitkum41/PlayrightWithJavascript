import {test,expect} from '@playwright/test'

test('SoftAssertion', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');

  await expect.soft(page).toHaveTitle('STORE1');

  await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')

  const logo = await page.locator('.navbar-brand')

  await expect(logo).toBeVisible()
})