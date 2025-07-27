import {test,expect} from '@playwright/test'

test('Home page test', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html")
    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Nitesh_Kumar')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[@onclick='logIn()']").click()

    //home page

    await expect(page.locator("#nameofuser")).toHaveText("Welcome Nitesh_Kumar")
    const products = await page.$$(".hrefch")
    await expect(products.length).toBe(9)

    //log out
    await page.locator("//a[@onclick='logOut()']").click()

})


test('Add cart test', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html")
    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Nitesh_Kumar')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[@onclick='logIn()']").click()

    //add to cart

    await page.locator("//a[text()='Samsung galaxy s6']").click()

    await page.locator("//a[@onclick='addToCart(1)']").click()

    //dialog window handler - enable 

    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()

    })

    

    //log out
    await page.locator("//a[@onclick='logOut()']").click()

})



