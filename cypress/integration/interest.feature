Feature: Multiform Web Application

    Automate multiform functionalities

@focus
Scenario: verify in interest section, should enable i like XBox option.
Given navigate to site url
Then  click on profile tab
When click on i like XBox option
Then i like XBox option should be enabled

@focus
Scenario: verify in interest section, should enable i like Ps4 option.
Given navigate to site url
Then click on profile tab
When click on i like Ps4 option
Then i like Ps4 option should be enabled
Then click on next section
