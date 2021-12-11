Feature: Login to Webstore Website

  Scenario Outline: I can log into the my account area

    Given I am on the home page
    When I login with <username> and <password>
    Then I should see message saying <message>

    Examples:
      | username      | password | message    |
      | demo | demo123  | MY ACCOUNT |
#  | foobar   | barfoo               | Your username is invalid!      |