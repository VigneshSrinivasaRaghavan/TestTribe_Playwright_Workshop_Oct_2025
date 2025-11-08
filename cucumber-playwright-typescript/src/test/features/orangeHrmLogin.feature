Feature: Orange HRM Login Feature

Scenario: Login Orange HRM with valid credentials
Given user is on the orangehrm login page
When user enters the valid username
And user enter the valid password
And user clicks on the login button
Then user will be navigated to the orangehrm dashboard page