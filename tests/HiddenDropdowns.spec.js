import {test,expect} from '@playwright/test'

test('HiddenDropdown', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button',{type:'submit'}).click()

    await page.locator("//*[@id='app']//ul/li[2]/a/span").click()

    await page.locator("//*[@id='app']//form/div[1]/div/div[6]/div/div[2]/div/div/div[1]").click()
    

    const options = await page.$$("//div[@role='listbox']//span")

    console.log("total options",options.length)

    for(const option of options){
        const jobtitle=await option.textContent()
        if (jobtitle.includes("Automaton Tester")){

            console.log("Found",jobtitle)

            await option.click()
           
            break

        }
    }
    await page.waitForTimeout(3000)

})