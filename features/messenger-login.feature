Feature: Login to Eikon Messenger
  As an messenger user
  A new user should be able to access eikon Messenger
  User should be able to login to Eikon Messenger

  Scenario: Login Check for Eikon Messenger
    Given User acces to login page
    When Enters valid username and password and click login
    Then Messenger should be shown

#Scenario: Access directory
#    Given User access to messenger
#   When Directory link is accessed
    #When A new user should be able to access todoist.com

    Scenario: Signup Page check
      Given User access todoist.com
        When User clicks on Sign up link
        Then Signup page should be shown with options to signup with Google and Email
        When User enters details and click signup
        Then Signup success message should be shown
