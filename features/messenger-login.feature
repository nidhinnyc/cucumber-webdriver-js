Feature: Login to Eikon Messenger
  As an messenger user
  A new user should be able to access eikon Messenger
  User should be able to login to Eikon Messenger

  Scenario: Login Check for Eikon Messenger
    Given User acces to login page
    When Enters valid username and password and click login
    Then Messenger should be shown

Scenario: Access directory
    Given User access to messenger
    When Directory link is accessed
    Then People Directory should be shown
