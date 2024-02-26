import { expect } from '@wdio/globals'

describe('GitHub Test Cases', () => {

    xit('Open the "About" page from the footer.', async () => {
        await browser.url('https://github.com/');
        const FooterButton = await $("[href='https://github.com/about']");
        await FooterButton.scrollIntoView();
        await FooterButton.click();
        const aboutText = await $("main div h1");
        await expect(aboutText).toHaveText("Let's build from here");
        await expect(aboutText).toBeDisplayedInViewport();
    })

    xit('Subscribe to a developers newsletters', async () => {
        await browser.url('https://github.com/');
        const subscribeButton = await $("[href='https://resources.github.com/newsletter/']");
        await subscribeButton.scrollIntoView();
        await subscribeButton.click();
        const emailInputField = await $("[placeholder='you@company.com']");
        await expect(emailInputField).toBeDisplayed();
        await emailInputField.addValue("sometestemail@gmail.com");
        await expect(emailInputField).toHaveValue("sometestemail@gmail.com");
        //const countryDropDown = await $("[data-testid='countrySelect']");
       // await countryDropDown.click;
        const uaID = await $("[value='UA']");
        await uaID.click();
        await expect(uaID).toBeSelected();

        const subButton = await $("button span span");
        await subButton.click();

        await expect(await $("div h1")).toHaveText("Thanks for subscribing!");
    })

    xit('Try to subscribe to a developers newsletters withount entering email', async () => {
        await browser.url('https://github.com/');
        const subscribeButton = await $("[href='https://resources.github.com/newsletter/']");
        await subscribeButton.scrollIntoView();
        await subscribeButton.click();
        const emailInputField = await $("[placeholder='you@company.com']");
        await expect(emailInputField).toBeDisplayed();
        const uaID = await $("[value='UA']");
        await uaID.click();
        await expect(uaID).toBeSelected();

        const subButton = await $("button span span");
        await subButton.click();

        
    })

    xit('Try to subscribe for free for the GitHub without login', async () => {
        await browser.url('https://github.com/');
        const dropDown = await $("div[class='flex-1 flex-order-2 text-right'] span span");
        await dropDown.click();
        const pricingbeButton = await $("nav ul li a[href='/pricing']");
        await pricingbeButton.click();
        
        await expect(await $("h1[class='h2-mktg']")).toHaveText("Get the complete developer platform.");

        const freePlanButton = await $("[test_selector='plan-input-free']");
        await freePlanButton.click();


        await expect(browser).toHaveUrl("https://github.com/signup");
    })

    it('Open the GitHub Ducumentation page from the header', async () => {
        await browser.url('https://github.com/');
        const dropDown = await $("div[class='flex-1 flex-order-2 text-right'] span span");
        await dropDown.click();
        const productButton = await $("//*/button[contains(text(), 'Product')]");
        await productButton.click();
        const documentationButton = await $("header  div ul li a[href='https://docs.github.com']");
        await documentationButton.click();
        await browser.switchWindow("https://docs.github.com/");
        await expect(browser).toHaveUrl("https://docs.github.com/en");
    })
})