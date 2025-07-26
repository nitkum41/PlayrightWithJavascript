//const {test,expect} = require('@playwright/test');

import {test,expect} from '@playwright/test'

test('Locators',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //click on login
    // await page.locator('id=login2').click()
    await page.click('id=login2')
    
    //provide username
    // await page.locator('#loginusername').fill('testuser')
    await page.fill('#loginusername','testuser')
    // await page.type('#loginusername','testuser')

    //provide password
    await page.fill("input[id='loginpassword']",'test@123')

    //login
    await page.click("//button[normalize-space()='Log in']")

    //visible post login

    const logoutlink = await page.locator("//a[normalize-space()='Log in']")
    await expect(logoutlink).toBeVisible()
})
