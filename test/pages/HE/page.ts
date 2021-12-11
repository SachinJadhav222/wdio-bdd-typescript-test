/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const base_url:string="https://the-internet.herokuapp.com/"

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string): Promise<string> {
        return browser.url(base_url+`${path}`)
    }
}
