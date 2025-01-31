import { test, expect } from '@playwright/test';





test('Add product and remove', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/'); //Go to URL
    
    await page.fill('.search-keyword', 'ro'); // enter in field text 'ro'
    
    //step 1
    const carrot = page.locator('.product').filter({ hasText: 'Carrot' }); // find and filter CSS selector "Carrot;"
    await carrot.locator('input.quantity').fill('5'); //input value "5"  in count carrots;
    await expect(carrot.locator('input.quantity')).toHaveValue('5'); // we check the amount of carrots;
    
    //step 2
    await page.locator('.product:has-text("Mushroom") .increment').click({ clickCount: 2 });  //find element Mushroom and add coount 3;
    await expect(page.locator('.product:has-text("Mushroom") input.quantity')).toHaveValue('3'); //we check the amount of Mushrooms;
   
    //step 3
    await page.click('//h4[contains(text(), "Mushroom")]/following-sibling::div/button'); //add Mushrooms in trash;
   
    //step 4 
    await page.click('//h4[contains(text(), "Carrot")]/following-sibling::div/button');  // add Carrot in trash;
   
   
    //step 5 
    await page.click('//img[@alt="Cart"]'); // click to trash  and show details;
    await page.waitForSelector('//div[@class="cart-preview active"]'); // wait selector with product
    
    
    //step 6
    const removeCarrot = await page.locator("//div[@class='cart-preview active']//img[contains(@src, 'carrots.jpg')]/ancestor::li[@class='cart-item']//a[@class='product-remove']"); //creater and search locator for remove product "Carrot";
    await removeCarrot.click(); //Action , remove "Carrot";
    await expect(removeCarrot).toHaveCount(0); // we check the visible element;
    console.log("Carrot удалён из корзины!");
   
    

});













   