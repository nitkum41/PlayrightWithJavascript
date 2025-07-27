import {test,expect} from '@playwright/test'

test('Date picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //1. direct input
    // await page.locator('#datepicker').fill('07/27/2024')

    //2.date picker

    await page.locator('#datepicker').click()

    const date="20"
    const month ="October"
    const year="2021"

    //1.year and month selection using loop
    while(true){
        const currentyear = await page.locator('.ui-datepicker-year').textContent()
        const currentmonth = await page.locator('.ui-datepicker-month').textContent()
        if (currentyear == year && currentmonth==month){
            break
        }

        // await page.locator('[title="Next"]').click() //next //future date
           await page.locator('[title="Prev"]').click() //prev //past date
    }

   

    const dates = await page.$$("//a[@class='ui-state-default']")

    // 1.date selection using loop
    for (const dte of dates){

        if(await dte.textContent()==date){
            await dte.click()
            break
        }

    }


    //2.date selction without loop

    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click()
    
    await page.waitForTimeout(5000)

})