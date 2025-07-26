import {test,expect} from '@playwright/test'

test('BootstrapDropdowns', async ({ page }) => {

    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

    await page.locator("input[id='justAnInputBox']").click()

    //assertion

    //1 count no of options

    const options = await page.$$("#comboTree258427DropDownContainer ul li")
    await page.waitForTimeout(2000)
    await expect(options.length).toBe(15)
})
