import {test,expect} from '@playwright/test'

test('Nested/Inner Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

    // await frame3.locator("[name='mytext3']").fill("inside frame 3")


    //child frames
    const chilFrames = await frame3.childFrames() //child frames
    await chilFrames[0].locator("//div[@id='i9']//div[@class='AB7Lab Id5V1']").check()
    await page.waitForTimeout(3000)

})