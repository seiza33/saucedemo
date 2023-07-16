import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../support/pages/login.page.js'; 
import homePage from '../support/pages/home.page.js';

Given(/^I am on the homepage$/, async () => {
    await browser.url("/")
    await LoginPage.login('standard_user','secret_sauce')
});

When(/^I click on the filter product button$/, async () => {
    await homePage.pageExist ();
});

Then(/^It should apppear a list of sorting$/, async () => {
    await expect ($('//option[@value="az"]')).toBeExisting();
});