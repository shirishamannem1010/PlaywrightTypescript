import { Page } from "@playwright/test";

export class ProductPage {
    megaMenuBtn:string; 
    samsung: string;
    ipodTouch: string;
    increaseQuantity: string;
    addtocartBtn: string;
    buyNow: string;
    loginForBuy: string; coupon:string;
    firstName:string; lastName:string; email:string; telephone:string;password:string
    cnfpassword:string; company:string; address1:string; address2:string; city:string
    country:string; termsConditions:string; continueBtn:string;
    constructor(public page: Page) {
        this.page = page;
        this.samsung = "(//a[@class='nav-link icon-left text'])[5]";
        this.ipodTouch = "(//img[@class='lazy-load'])[1]";
        this.increaseQuantity = "(//button[@aria-label='Increase quantity'])[2]";
        this.addtocartBtn = "(//button[text()='Add to Cart'])[2]";
        this.buyNow = "//button[text()='Buy now']";
        this.loginForBuy = "(//label[@class='custom-control-label'])[1]";
        this.coupon="input[name='coupon']";
        this.megaMenuBtn = "//span[normalize-space(text())='Mega Menu']";
        this.samsung="(//a[@class='nav-link icon-left text'])[5]";
        this.firstName="#input-payment-firstname";
        this.lastName="#input-payment-lastname";
        this.email="#input-payment-email";
        this.telephone="#input-payment-telephone";
        this.password="#input-payment-password";
        this.cnfpassword="#input-payment-confirm";
        this.company="#input-payment-company";
        this.address1="#input-payment-address-1";
        this.address2="#input-payment-address-2";
        this.city="#input-payment-city";
        this.country="#input-payment-country";
        this.termsConditions="(//a[@class='agree'])[2]";
        this.continueBtn="(//button[@type='submit'])[3]";
    }
    async navigateToSamsungProduct() {
        const elementHandle = await this.page.waitForSelector("//span[normalize-space(text())='Mega Menu']", { timeout: 5000 });

        const boundingBox = await elementHandle.boundingBox();
        // const x = boundingBox.x + boundingBox.width / 2; // Center X coordinate of the element
        // const y = boundingBox.y + boundingBox.height / 2; // Center Y coordinate of the element
        console.log("------------------", boundingBox)
        await this.page.locator(this.megaMenuBtn).waitFor({ state: 'visible' });
        await this.page.locator(this.megaMenuBtn).hover();
        await this.page.waitForSelector(this.samsung, { timeout: 5000 });
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
        await this.page.locator(this.termsConditions).click();
        
        this.page.on('dialog', async dialog => {
            // console.log('Dialog message:', dialog.message());
            await dialog.dismiss();
        });
        

        // await this.page.locator(this.continueBtn).click();
    }
}
