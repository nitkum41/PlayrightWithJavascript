import {test,expect} from '@playwright/test'

test('Assertion', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  const logo = await page.getByAltText('nopCommerce demo store')
  await expect(logo).toBeVisible()

  const regButton = await page.locator("//button[@id='register-button']")
  expect(regButton).toHaveAttribute('name','register-button')

  const title = await page.locator('.page-title h1')

  expect(title).toHaveText('Register')

  expect(title).toContainText('Reg')

  const email = await page.locator('#Email')

  await email.fill('abc@gmail.com')

  await expect(email).toHaveValue('abc@gmail.com')

  await page.goto('https://demo.nopcommerce.com/digital-downloads')

  const dropdown = await page.locator('select[id="products-orderby"] option')
  await expect(dropdown).toHaveCount(6)


});