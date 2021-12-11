import { ChainablePromiseElement } from 'webdriverio';

import Web_Base from './web_base';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WebHomePage extends Web_Base {
    /**
     * define selectors using getter methods
     */
    public get singInButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//a[contains(text(),"Sign in")]');
    }
}

export default new WebHomePage();