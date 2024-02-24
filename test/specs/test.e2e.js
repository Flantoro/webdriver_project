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

    it('Home Task', async () => {
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
})

