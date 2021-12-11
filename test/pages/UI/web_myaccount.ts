import { ChainablePromiseElement } from 'webdriverio';

import Web_Base from './web_base';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MyAccountPage extends Web_Base {
    /**
     * define selectors using getter methods
     */
    public get pageHeading(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('.page-heading');
    }
}

export default new MyAccountPage();