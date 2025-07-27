import {test,expect} from '@playwright/test'

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames on page
    const countframes = await page.frames()
    console.log("total frames",countframes.length)

    //M1-using name or url of the frame
    // const frame = await page.frame('frame-name')--if name available
    const frame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame.fill('[name="mytext1"]',"inside frame 1")


    //M2 usng frame locator

    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator('[name="mytext1"]')
    await inputbox.fill("inside frame1")

    await page.waitForTimeout(3000)

})