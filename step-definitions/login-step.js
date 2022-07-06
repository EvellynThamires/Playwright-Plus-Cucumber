const { Given, When, Then, defineStep } = require("@cucumber/cucumber")
const { LoginPage } = require("../page-objects/login-page")

const loginPage = new LoginPage()

Given("I visit a login page", async () => {
    await loginPage.navigateToLoginScreen()
})

When("I fill the login form with valid credentials", async () => {
    await loginPage.submitLoginForm()
})

When(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await loginPage.submitLoginWithParameters(username, password)
})

Then("I should see the home page", async () => {
    await loginPage.assertUserIsLoginIn()
}) 

Then("I wait for 3 seconds", async () => {
    await loginPage.pause()
})