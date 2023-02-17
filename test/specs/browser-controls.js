const expectchai= import("chai")

describe('Browser controls',async()=>{

    it('Navigate to RS test demo page and access web elements',async()=>{

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await browser.getTitle())
        await $("#username").setValue("rahulshettyacademy")
        await ($("//input[@name='password']")).setValue("learning");
        await ($("input#terms")).click
        await (expect($(".text-center.text-white")).toHaveText("(username is rahulshettyacademy and Password is learning)"))

    })





})