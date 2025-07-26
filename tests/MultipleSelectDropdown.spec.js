import {test,expect} from '@playwright/test'

test('MultipleSelectDropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple options from multi select dropdowns

    await page.selectOption('#colors',['Blue','Red'])

    //assertions

    //1--check no of options in dropdown

    const options1 = await page.locator('#colors option')
    expect(options1).toHaveCount(7)

    //2--check no of options using array
    const options = await page.$$('#colors option')
    expect(options.length).toBe(7)


    //3--presence of element/value in dropdown
    const content = await page.locator('#colors').textContent()
    expect(content.includes('Red')).toBeTruthy()



    await page.waitForTimeout(2000)



})