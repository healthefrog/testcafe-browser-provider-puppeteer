import puppeteer from 'puppeteer';

const settings = {
    lang: 'en-GB',
};

export default {
    // Multiple browsers support
    isMultiBrowser: true,

    browser: null,

    openedPages: {},

    setLang(lang) {
        settings.lang = lang;
        console.log(`Puppeteer language is set to '${settings.lang}'`);
    },

    // Required - must be implemented
    // Browser control
    async openBrowser(id, pageUrl, browserName) {

        if (!this.browser) {
            let puppeteerArgs = [`--lang=${settings.lang}`];

            if (browserName.includes("no_sandbox")) {
                console.log(`Using puppeteer without sandbox! Language = ${settings.lang}`);
                console.log('');
                puppeteerArgs = [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--remote-debugging-port=9222',
                    `--lang=${settings.lang}`
                ];
            }
            this.browser = await puppeteer.launch({
                timeout: 10000,
                args: puppeteerArgs
            });

        }

        const page = await this.browser.newPage();

        await page.goto(pageUrl);
        this.openedPages[id] = page;
    },

    async closeBrowser(id) {
        const page = this.openedPages[id];

        delete this.openedPages[id];
        await page.close();
    },


    async isValidBrowserName() {
        return true;
    },

    // Extra methods
    async resizeWindow(id, width, height) {
        await this.openedPages[id].setViewport({ width, height });
    },

    async takeScreenshot(id, screenshotPath) {
        await this.openedPages[id].screenshot({ path: screenshotPath });
    }
};
