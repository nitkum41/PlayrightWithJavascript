exports.HomePage = 
class HomePage{
    constructor(page){
        this.page=page
        this.productList = ".hrefch"
        this.addTocart = "//a[@onclick='addToCart(1)']"
        this.cart = '#cartur'
    }

    async addProductToCart(productName){
         const productList = await this.page.$$(this.productList)

         for(const product of productList){
            console.log(await product.textContent())
            if(productName=== await product.textContent()){
                await product.click()
                break
            }
        }
         await this.page.on('dialog',async dialog=>{
                if(dialog.message().includes('added')){
                     await dialog.accept()
                }
               
        
            })

            await this.page.locator(this.addTocart).click()

         
         
    }

    async goToCart(){
        await this.page.locator(this.cart).click()
    }


    
}