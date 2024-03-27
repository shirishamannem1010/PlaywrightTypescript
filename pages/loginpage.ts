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
    logOut:string;
    continueLogout:string;
    constructor(public page: Page) {
        this.page = page;
        this.myAccount = "(//span[normalize-space(text())='My account'])[2]";
        this.loginButton = "//span[normalize-space(text())='Login']";
        this.emailInput = "input[name='email']";
        this.passwordInput = "input[name='password']";
        this.loginSubmit = "input[type='submit']";
       
        this.ipodTouch="(//img[@class='lazy-load'])[1]";
        this.increaseQuantity="(//button[@aria-label='Increase quantity'])[2]";
        this.addtocartBtn="(//button[text()='Add to Cart'])[2]";
       
        this.buyNow="//button[text()='Buy now']";
        this.loginForBuy="(//label[@class='custom-control-label'])[1]"
       
        
       
        this.logOut="//i[@class='fas fa-sign-out-alt fa-fw mr-1']";
        this.continueLogout="//a[@class='btn btn-primary']";
        
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
    
    // async selectProduct(){
    //     await this.page.locator(this.ipodTouch).click();
    //     await this.page.locator(this.increaseQuantity).dblclick();
    //     // await this.page.locator(this.addtocartBtn).click();
    //     // const checkoutButton = await this.page.waitForSelector('.btn.btn-secondary.btn-block:nth-child(4)');
    //     // await checkoutButton.click();
    //     await this.page.locator(this.buyNow).click();
    //     await this.page.locator(this.loginForBuy).check();
    //     await this.page.waitForTimeout(5000);
    // }

    async lamdalogout(){
        await this.page.locator(this.myAccount).waitFor({ state: 'visible' });
        await this.page.locator(this.myAccount).click();
        await this.page.locator(this.logOut).click();
        await this.page.locator(this.continueLogout).click();
        console.log("------logout successfully------")
    }
}