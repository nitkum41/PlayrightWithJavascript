import {test,expect} from '@playwright/test'

test.skip('Alerts witk OK', async ({ page }) => {
    
  await page.goto('https://testautomationpractice.blogspot.com/');

  //dialog window handler - enable 

  page.on('dialog',async dialog=>{

    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept()

  })

  await page.locator('button[id="alertBtn"]').click()

  await page.waitForTimeout(5000)

})

test.skip('Alerts witk confirmation Dialog - ok and cancel', async ({ page }) => {
    
  await page.goto('https://testautomationpractice.blogspot.com/');

  //dialog window handler - enable 

  page.on('dialog',async dialog=>{

    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    // await dialog.accept() //close by ok
    await dialog.dismiss() //close by cancel

  })

  await page.locator('button[id="confirmBtn"]').click()
//   await expect(page.locator('p[id="demo"]')).toHaveText("You pressed OK!")
  await expect(page.locator('p[id="demo"]')).toHaveText("You pressed Cancel!")
  await page.waitForTimeout(5000)

})


test('Prompt Dialog  - ok and cancel and input button', async ({ page }) => {
    
  await page.goto('https://testautomationpractice.blogspot.com/');

  //dialog window handler - enable 

  page.on('dialog',async dialog=>{

    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter')
    // await dialog.accept("Nitesh Kumar") //close by ok
    await dialog.dismiss() //close by cancel

  })

  await page.locator('button[id="promptBtn"]').click()
//   await expect(page.locator('p[id="demo"]')).toHaveText("Hello Nitesh Kumar! How are you today?")
  await expect(page.locator('p[id="demo"]')).toHaveText("User cancelled the prompt.")
  await page.waitForTimeout(5000)

})