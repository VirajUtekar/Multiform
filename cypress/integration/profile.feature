Feature: Multiform Web Application

    Automate multiform functionalities

Scenario: verify correct username and email validation
Given navigate to site url
Then verify profile tab is selected
Then enter username into username field
Then enter email into email field
When click on next section
Then verify user lands on interest section