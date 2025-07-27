import {test,expect} from '@playwright/test'

test('page screesnhot', async ({ page }) => {

    await page.goto('https://democrart.com/collections/photography');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'_Homepage.png'})
})


test('full page screesnhot', async ({ page }) => {

    await page.goto('https://democrart.com/collections/photography');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'_Full_Homepage.png',fullPage:true})

})



test.only('element screesnhot', async ({ page }) => {

    await page.goto('https://democrart.com/collections/photography');
    await page.locator("//img[@alt='Paisagem de Baixa Luz - Beleza Incontável']").screenshot({path:'tests/screenshots/'+Date.now()+'_space.png'})



})