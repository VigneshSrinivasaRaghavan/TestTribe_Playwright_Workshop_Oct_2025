Feature: Orange HRM Admin Feature

Scenario: Orange HRM Admin test
Given user is on the orangehrm login page
When user enters the valid username
And user enter the valid password
And user clicks on the login button
And user clicks on admin tab
Then user will be navigated to the orangehrm admin page