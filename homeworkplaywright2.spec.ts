import { test, expect } from '@playwright/test'
import { describe } from 'node:test';
import { LandingPage } from './page-objects/LandingPage';

let testURL = 'https://www.saucedemo.com/';
let usernameenter = '[data-test="username"]';
let passwordenter = '[data-test="password"]';
let loginclick = '[data-test="login-button"]';

test.describe('login suite', async() => {

    test('has title', async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        
        //Expect a title "to contain" a subscribing.
        await expect(landingPage.page).toHaveTitle(/Swag Labs/);
        });
        
        test('check Login error page of saucedemo', async ({page}) => {
            const landingPage = new LandingPage(page);
            await landingPage.goto();
            //await landingPage.login("incorrectuser","12345678");
            await landingPage.getloginfield.fill("incorrectuser");
            await landingPage.getpassfield.fill("12345678");
            await landingPage.loginclick.click();

            await expect(landingPage.getloginerrormessage).toBeVisible();
        
        });
        
        test('check correct Login page of saucedemo', async ({page}) => {
            const landingPage = new LandingPage(page);
            await landingPage.goto();

            //await landingPage.login("standard_user","secret_sauce");
            await landingPage.getloginfield.fill("standard_user");
            await landingPage.getpassfield.fill("secret_sauce");
            await landingPage.loginclick.click();
        
            //check element after Login
            await expect(true).toBeTruthy();
            await expect(landingPage.getshoppingcartcont).toBeVisible();
        
        });
})
