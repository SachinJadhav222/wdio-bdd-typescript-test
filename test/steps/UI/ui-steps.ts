import { Given, When, Then } from '@wdio/cucumber-framework';

//import HomePage from '../../pages/UI/web_home';
import Web_base from '../../pages/UI/web_base'
import LoginPage from '../../pages/UI/web_login';
import MyAccountPage from '../../pages/UI/web_myaccount';



Given(/^I am on the (\w+) page$/, async (page) => {
    page="";
    //console.log('This in----->',this)
    //await pages[page].open()
    await new Web_base().open(page);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    username=username+'@demomail.com'
    await LoginPage.login(username, password)
});

Then(/^I should see message saying (.*)$/, async (message) => {
    await expect(MyAccountPage.pageHeading).toBeExisting();
    await expect(MyAccountPage.pageHeading).toHaveTextContaining(message);
});

