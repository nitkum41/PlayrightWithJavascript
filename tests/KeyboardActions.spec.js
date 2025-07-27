import {test,expect} from '@playwright/test'

test('Keyboard Actions', async ({ page }) => {

  await page.goto('https://gotranscript.com/text-compare');

  await page.locator("[name='text1']").fill("welcome to playwright")

//   await page.type("[name='text1']","welcome to playwright")

    //keyboard action

    //ctrl + A
    await page.keyboard.press('Control+A')

    //ctrl+C
    await page.keyboard.press('Control+C')

    //tab
    await page.keyboard.down('Tab') //for one key press
    await page.keyboard.up('Tab')

    //ctrl+V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(3000)
})
