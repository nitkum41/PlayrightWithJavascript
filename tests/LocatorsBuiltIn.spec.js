//const {test,expect} = require('@playwright/test');

import {test,expect} from '@playwright/test'

test('LocatorsBuiltIn',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //getbyalttext attribute - for images
    const logo = await page.getByAltText('company-branding')

    await expect(logo).toBeVisible()

    //getbyplaceholder attribute - for input and text fields

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //getbyrole-any explicit and implicit attributes-any element

    await page.getByRole('button',{type:'submit'}).click()

    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(page.getByText(name)).toBeVisible() //inner text of element



    
    }
)
