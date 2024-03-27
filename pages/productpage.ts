// productpage.ts
import { Page } from "@playwright/test";

export class ProductPage {
    samsung: string;
    ipodTouch: string;
    increaseQuantity: string;
    addtocartBtn: string;
    buyNow: string;
    loginForBuy: string; coupon:string;
    constructor(public page: Page) {
        this.page = page;
        this.samsung = "(//a[@class='nav-link icon-left text'])[5]";
        this.ipodTouch = "(//img[@class='lazy-load'])[1]";
        this.increaseQuantity = "(//button[@aria-label='Increase quantity'])[2]";
        this.addtocartBtn = "(//button[text()='Add to Cart'])[2]";
        this.buyNow = "//button[text()='Buy now']";
        this.loginForBuy = "(//label[@class='custom-control-label'])[1]";
        this.coupon="input[name='coupon']";
    }

    async navigateToSamsungProduct() {
        await this.page.locator(this.samsung).click();
        await this.page.waitForTimeout(5000);
    }

    async selectProduct() {
        await this.page.locator(this.ipodTouch).click();
        await this.page.locator(this.increaseQuantity).dblclick();
        await this.page.locator(this.buyNow).click();
        await this.page.locator(this.loginForBuy).check();
        await this.page.waitForTimeout(5000);
    }
    async paymentDetails(){
        await this.page.locator(this.firstName).fill("shirisha");
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.lastName).fill("mannem");
        // await this.page.locator(this.email).fill("shirishamannem20@gmail.com");
        // await this.page.locator(this.telephone).fill("+918712269999");
        // await this.page.locator(this.password).fill("Shirisha");
        // await this.page.locator(this.cnfpassword).fill("Shirisha");
        await this.page.locator(this.company).fill("abcde");
    }
    async billingAdress(){
        await this.page.locator(this.address1).fill("2 nd floor")
        await this.page.locator(this.address2).fill(" feuji ");
        await this.page.locator(this.city).fill("vizag");
        // await this.page.locator(this.country).click();
        await this.page.selectOption('select[name="country_id"]', { value: '99' });
        
        await this.page.selectOption('#input-payment-zone',{value:'3951'})
        // const agreeCheckboxes = await this.page.$$('.agree');

        // for (const checkbox of agreeCheckboxes) {
        //  await checkbox.click();
        // }
        await this.page.locator(this.termsConditions).click();
        // await this.page.locator(this.continueBtn).click();
    }
}
