import {test,expect} from '@playwright/test'

test.skip('Mouse hover', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const btn = await page.locator("button[class='dropbtn']")

    const mobiles = await page.locator("//div[@class='dropdown-content']/a[1]")
    const laptops = await page.locator("//div[@class='dropdown-content']/a[2]")

    //hover

    await btn.hover()

    await mobiles.hover()
    await page.waitForTimeout(2000)

    await laptops.hover()

    await page.waitForTimeout(2000)


})

test.skip('Mouse Right click', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const btn = await page.locator("//span[text()='right click me']")
    
    //right click action
     btn.click({button:'right'})

    await page.waitForTimeout(2000)


})

test.skip('Mouse Double click ', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const btn = await page.locator("//button[normalize-space()='Copy Text']")

    //double click

    await btn.dblclick()

    const f2 = await page.locator("input[id='field2']")

    await expect(f2).toHaveValue("Hello World!")

  


})

test('Mouse Drag Drop ', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/dragdrop/');

    const targetelt = await page.locator("div[id='bin']")

    const source1 = await page.locator("a[id='two']")
    const source2 = await page.locator("a[id='three']")

   //m1--using mouse hover up and down

   await source1.hover()
   await page.mouse.down()

   await targetelt.hover()
   await page.mouse.up()


   //m2--direct method

   await source2.dragTo(targetelt)

  
    await page.waitForTimeout(3000)

})