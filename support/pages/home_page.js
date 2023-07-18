class HomePage {
    get sortButton () {return $('//select[@class="product_sort_container"]');}
    get sortButtonByName () {return $('//option[@value="az"]');}

    async pageExist () {
        await this.sortButton.click();
        await this.sortButtonByName.click();}
}

export default new homePage();