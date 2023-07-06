class homePage {
    get  cartButton() {return $('//button[@id="shopping_cart_container"]');}
    get sortButton() {return $('//select [@data-test="product_sort_container"]');}
    get productButton() {return $('//span[@class="title"]');}
    get addToCartButton() {return $('//button[@id="add-to-cart-sauce-labs-backpack"]');}


    async pageExist (){
        await expect(this.cartButton).toBeExisting();
        await expect(this.sortButton).toBeExisting();
        await expect(this.productButton).toBeExisting();
        await expect(this.addToCartButton).toBeExisting();

    }

}

export default new homePage();