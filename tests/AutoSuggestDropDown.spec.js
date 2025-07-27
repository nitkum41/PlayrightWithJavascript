import {test,expect} from '@playwright/test'

test('AutosuggestDropdowns', async ({ page }) => {

    await page.goto('https://www.redbus.in/');
    await page.getByRole('button', { name: 'From'}).click()

    await page.locator("input[id='srcDest']").fill("Delhi")

    await page.waitForTimeout(2000)

    await page.waitForSelector('.searchCategory___03761b')

    const options = await page.$$('.searchCategory___03761b')
    console.log("total options",options.length)

   for(const option of options){
    const value = await option.textContent()
    if(value.includes('Delhi')){
        await option.click()
        break
    }

    // console.log("Autosuggeastion options",value)
   }
    await page.waitForTimeout(2000)


})