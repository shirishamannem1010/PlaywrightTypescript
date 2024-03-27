import { Page, } from "@playwright/test";
import * as data from "../data/data.json";
export  class LoginPage{
    myAccount: string;
    loginButton: string;
    lastNameInput: string;
    emailInput: string;
    passwordInput:string;
    loginSubmit: string;
    megaMenuBtn:string;
    samsung:string;
    ipodTouch:string;
    increaseQuantity:string;
    addtocartBtn:string;buyNow:string;
    firstName:string; lastName:string; email:string;
    telephone:string; password:string; cnfpassword:string; 
    company:string; address1:string; address2:string; city:string;
    postcode:string; country:string;
    loginForBuy:string; 
    termsConditions:string;
    continueBtn:string;
    constructor(public page: Page) {
        this.page = page;
        this.myAccount = "(//span[normalize-space(text())='My account'])[2]";
        this.loginButton = "//span[normalize-space(text())='Login']";
        this.emailInput = "input[name='email']";
        this.passwordInput = "input[name='password']";
        this.loginSubmit = "input[type='submit']";
        this.megaMenuBtn = "//span[normalize-space(text())='Mega Menu']";
        this.samsung="(//a[@class='nav-link icon-left text'])[5]";
        this.ipodTouch="(//img[@class='lazy-load'])[1]";
        this.increaseQuantity="(//button[@aria-label='Increase quantity'])[2]";
        this.addtocartBtn="(//button[text()='Add to Cart'])[2]";
        this.firstName="#input-payment-firstname";
        this.lastName="#input-payment-lastname";
        this.email="#input-payment-email";
        this.telephone="#input-payment-telephone";
        this.password="#input-payment-password";
        this.cnfpassword="#input-payment-confirm";
        this.company="#input-payment-company";
        this.address1="#input-payment-address-1";
        this.address2="#input-payment-address-2";
        this.buyNow="//button[text()='Buy now']";
        this.loginForBuy="(//label[@class='custom-control-label'])[1]"
        this.city="#input-payment-city";
        this.country="#input-payment-country";
        this.termsConditions="(//a[@class='agree'])[2]";
        this.continueBtn="(//button[@type='submit'])[3]";
    }
    async navigateToLogin(){
        await this.page.locator(this.myAccount).waitFor({ state: 'visible' });
         await this.page.locator(this.myAccount).hover();
        await this.page.locator(this.loginButton).click();
    }
    async fillLoginDetails(){
         await this.page.locator(this.emailInput).type("shirisha7143@gmail.com");
         await this.page.locator(this.passwordInput).fill(data.password);
         await this.page.locator(this.loginSubmit).click();

         console.log("==== page url : =============", await this.page.url());
    }
    async megaMenuBtns() {
        await this.page.locator(this.megaMenuBtn).hover();
        // await this.page.waitForSelector(this.samsung, { timeout: 5000 });
        await this.page.locator(this.samsung).click();
        await this.page.waitForTimeout(5000);
    }
    async selectProduct(){
        await this.page.locator(this.ipodTouch).click();
        await this.page.locator(this.increaseQuantity).dblclick();
        // await this.page.locator(this.addtocartBtn).click();
        // const checkoutButton = await this.page.waitForSelector('.btn.btn-secondary.btn-block:nth-child(4)');
        // await checkoutButton.click();
        await this.page.locator(this.buyNow).click();
        await this.page.locator(this.loginForBuy).check();
        await this.page.waitForTimeout(5000);
    }
}