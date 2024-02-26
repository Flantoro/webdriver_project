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

    it('Subscribe to a developers newsletters', async () => {
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
})