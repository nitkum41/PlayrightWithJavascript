import {test,expect} from '@playwright/test'

test('AutosuggestDropdowns', async ({ page }) => {

    await page.goto('https://www.redbus.in/');
    await page.getByRole('button', { name: 'From'}).click()

    await page.waitForTimeout(2000)


})