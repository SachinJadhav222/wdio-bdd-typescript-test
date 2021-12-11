import { ChainablePromiseElement } from 'webdriverio';

import Web_Base from './web_base';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Web_Base {

    public get singInButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//a[contains(text(),"Sign in")]');
    }
    
    public get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#email');
    }

    public get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#passwd');
    }

    public get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#SubmitLogin');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string): Promise<void> {
        await this.singInButton.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

export default new LoginPage();