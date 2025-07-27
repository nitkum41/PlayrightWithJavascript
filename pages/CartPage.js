exports.CartPage = 
class CartPage{
    constructor(page){
        this.page=page
        this.noofProducts='//tbody[@id="tbodyid"]/tr/td[2]'
    }

    async checkproductInCart(productName){
        const productsIncart = await this.page.$$(this.noofProducts)
        for(const product of productsIncart){
            console.log(await product.textContent())
            if(productName===await product.textContent()){
                return true
                break
            }
        }
    }
}