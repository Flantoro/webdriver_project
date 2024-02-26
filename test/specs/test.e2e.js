import { expect } from '@wdio/globals'

describe('Webdriverio main page', () => {

    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle();
        console.log(title);
        await expect(browser).toHaveTitle("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO");
    })


    xit('should show addValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username");
        await input.addValue("hello");
        await browser.pause(1000);

        await input.addValue(123); //addValue = hello123; setValue method will rewrite the 'hello' to '123'
        await browser.pause(1000);

        await expect(input).toHaveValue("hello123");
    })

    xit('should show click command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $(".radius");
        await browser.pause(1000);
        await loginButton.click();
        await browser.pause(1000);

        let inputUsername = await $("#username");
        await inputUsername.addValue("tomsmith");
        await browser.pause(1000);

        let inputPassword = await $("#password");
        await inputPassword.addValue("SuperSecretPassword!");
        await browser.pause(1000);

        await loginButton.click();
    })

    xit('should show getAttribute command', async () => {
        await browser.url('https://dou.ua/search/');

        let inputSearch = await $("[name='search']");
        let attr = await inputSearch.getAttribute("aria-label");

        console.log("place holser is " + attr);

        await inputSearch.setValue("Dog");
        attr = await inputSearch.getValue();
        await browser.pause(1000);
        console.log("place holser is " + attr);
    })

    xit('Home Task', async () => {
        await browser.url('https://webdriver.io/');

        let drop = await $("[aria-label='Toggle navigation bar']");
        await drop.click();
        let api = await $("/html/body/div/nav/div[3]/div[2]/div[1]/ul/li[2]/a");
        await api.click();
        await browser.pause(1000);
        await expect(await browser.getUrl()).toBe("https://webdriver.io/docs/api");
        let intro = await $("//*/h1");
        await expect(intro).toBePresent();
        await browser.pause(1000);
        let search = await $(".DocSearch-Button-Placeholder");
        await search.click();
        await browser.pause(1000);
        let input = await $("[placeholder='Search docs']");
        await input.addValue("all is done");
        await browser.pause(1000);
        await input.setValue("");
    })  
    xit('IsClickable method', async () => {
        await browser.url('https://webdriver.io/');

        const button = await $(".button[href='/docs/gettingstarted']");
        let clickable = await button.isClickable();
        console.log("Button is displayed " + clickable);
    });

    xit('IsVisible method', async () => {
        await browser.url('https://webdriver.io/');

        const visible = await $(".button[href='/docs/gettingstarted']");
        let displayed = await visible.isDisplayed();
        console.log("Button is clickable " + displayed);
    });  

    xit('IsEnabled method', async () => {
        await browser.url('https://webdriver.io/');

        const button = await $(".button[href='/docs/gettingstarted']");
        let enabled = await button.isEnabled();
        console.log("Button is enabled " + enabled);
    });

    xit('Scroll method', async () => {
        await browser.url('https://webdriver.io/');

        const FooterButton = await $(".footer__link-item[href='/docs/gettingstarted']");
        await browser.pause(1000);
        await FooterButton.scrollIntoView();
        await browser.pause(1000);
    });

    xit('saveScreenshot method', async () => {
        await browser.url('https://webdriver.io/');

        const FooterButton = await $(".footer__link-item[href='/docs/gettingstarted']");
        await browser.pause(1000);
        await FooterButton.scrollIntoView();
        await browser.pause(1000);
        await FooterButton.saveScreenshot("scr.png");
    });

    xit('newWindow and switchWindow methods', async () => {
        await browser.url('https://webdriver.io/');

        await browser.newWindow('https://github.com/Flantoro');
        await browser.switchWindow('https://webdriver.io/');
    });

    xit('Home Task 2', async () => {
        await browser.url('https://webdriver.io/');

        let drop = await $("[aria-label='Toggle navigation bar']");
        await drop.click();
        let api = await $("/html/body/div/nav/div[3]/div[2]/div[1]/ul/li[2]/a");
        await api.click();
        let blogButton = await $("a[href='/blog'][class='navbar__item navbar__link']");
        await blogButton.scrollIntoView();

        let protocolButton = await $("div [class='pagination-nav__label']");
        let visible = await protocolButton.isDisplayed();
        console.log("Button is visible" + visible);
        await protocolButton.click();

        let htm = await $("div h1");
        console.log(await htm.getHTML());

        let element = await $("div h2[id='webdriver-protocol']");
        await element.waitUntil(async function () {
            return (await this.getText()) === 'WebDriver Protocol'
        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        })
    })  

})

