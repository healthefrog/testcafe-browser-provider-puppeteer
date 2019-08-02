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
    async openBrowser (id, pageUrl, browserName) {
        if (!this.browser) {
            const launchArgs = {
                timeout: 10000,
                args: [`--lang=${settings.lang}`]
            };

            const noSandboxArgs = [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--remote-debugging-port=9222',
                `--lang=${settings.lang}`,
            ];

            if (browserName === 'no_sandbox') launchArgs.args = noSandboxArgs;
            else if (browserName.indexOf('?') !== -1) {
                const userArgs = browserName.split('?');
                const params = userArgs[0];

                if (params === 'no_sandbox') launchArgs.args = noSandboxArgs;

                const executablePath = userArgs[1];

                if (executablePath.length > 0)
                    launchArgs.executablePath = executablePath;
            }
            this.browser = await puppeteer.launch(launchArgs);
        }

        const page = await this.browser.newPage();

        await page.goto(pageUrl);
        this.openedPages[id] = page;
    },

    async closeBrowser (id) {
        delete this.openedPages[id];
        await this.browser.close();
    },

    async isValidBrowserName () {
        return true;
    },

    // Extra methods
    async resizeWindow (id, width, height) {
        await this.openedPages[id].setViewport({ width, height });
    },

    async takeScreenshot (id, screenshotPath) {
        await this.openedPages[id].screenshot({ path: screenshotPath });
    }
};
