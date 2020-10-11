# class-tracker
Web app for tracking items in game.

## Tools

* React
* NodeJS
* MongoDB

## Front End

# Components:
## Structure
* [X] App.js -> (Pages Dir) Home Component 
* [X] (Inside Home Component) -> Nav Component + InitialRegistration Component (Form)
* [X] (Inside Nav Component) -> Links to Data Component + Item Component.
* [X] (Data Component) -> Players can see what other players have/want and with that info make decisions for themselves about how to proceed with they want in the future
* [X] (Item Component) [Children] -> 
* [X] CurrentItems Component (initial items a player has in game at the time they fill out the form) 
* [X] ItemPriority Component (items a player wants in the future from participating in raid content in game)
* [X] Separated client and server login out into their own separate directories for better organization
-------------------------------
## Back End

* [X] Authenticate, log users in (and keep them logged in) and log users out
* [] CRUD Operations for currentitems/items on prio list
* [] Appropriate structure for data
* [] Enforce schema's on mongoose models
* [] Figure out best way to set up 1:Many Many:Many relationships

## TDD
### Api
* [] Unit testing on api routes, data models, and controllers in resources directory
* [] E2E testing wtih cyprus for the entire application once a final version is reached
