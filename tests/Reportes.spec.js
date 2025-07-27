import {test,expect} from '@playwright/test'

test('Test 1', async ({ page }) => {

    await page.goto('https://democrart.com/collections/photography');
    await expect(page).toHaveTitle("Photography")
})


test('Test 2', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveTitle("OrangeHRM")
})


test('Test 3', async ({ page }) => {

    await page.goto("https://www.orangehrm.com/")
    await expect(page).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")
})
