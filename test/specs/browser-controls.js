const expectchai= import("chai")

describe('Browser controls',async()=>{

    it('Navigate to RS test demo page and access web elements',async()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow();
        console.log(await browser.getTitle())
        await $("#username").setValue("rahulshettyacademy")
        await ($("//input[@name='password']")).setValue("learning");
        await ($("input#terms")).click
        await (expect($(".text-center.text-white")).toHaveText("(username is rahulshettyacademy and Password is learning)"))
        await browser.saveScreenshot("screenresult1.png")

    })
    
    it('Navigate to bonigarcia test page and verify various alerts', async()=>{

        await browser.url("https://bonigarcia.dev/selenium-webdriver-java/");
        await browser.maximizeWindow();
        expect(await browser.getTitle()).toEqual("Hands-On Selenium WebDriver with Java");
        browser.waitUntil((await $("//a[text()='Dialog boxes']")).isDisplayed);
        await $("//a[text()='Dialog boxes']").click();
        await $("#my-alert").click();
        await browser.pause(5000)
        console.log(await browser.isAlertOpen());
        await browser.saveScreenshot("screenresult2.png")
       
    })



})