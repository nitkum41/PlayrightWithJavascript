const {test,expect,chromium} = require('@playwright/test')

test('handle windows/pages',async()=>{

    const browser =  await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()

    console.log("no of pages created",allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.orangehrm.com/")
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

})

test.only('handle multiple windows/pages',async()=>{

    const browser =  await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()

    const allPages = context.pages()

    console.log("no of pages created",allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    const newPromise = context.waitForEvent('page') //open new tab for the link clicked below
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click() //click for new tab to open

    const newPage = await newPromise //assign new page the new tab

    //interact with new tab 
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

    await page1.waitForTimeout(2000)
    await newPage.waitForTimeout(3000)

    await browser.close()
   

})