import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'
test('Login page test', async ({ page }) => {

    //login

    const login = new LoginPage(page)

    await login.goToLoginPage()

    await login.login("Nitesh_Kumar","test@123")
    await page.waitForTimeout(3000)

    //home

    const home = new HomePage(page)
    await home.addProductToCart('Samsung galaxy s6')
    await page.waitForTimeout(3000)
    await home.goToCart()
    await page.waitForTimeout(3000)

    //cart

    const cart = new CartPage(page)
    const status = await cart.checkproductInCart('Samsung galaxy s6')
    await page.waitForTimeout(3000)
    await expect(status).toBe(true)

})