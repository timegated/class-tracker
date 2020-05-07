# class-tracker
Web app for tracking items in game.

## Tools

* React
* NodeJS
* MongoDB

## Front End

Components:

* App.js -> (Pages Dir) Home Component 
* (Inside Home Component) -> Nav Component + InitialRegistration Component (Form)
* (Inside Nav Component) -> Links to Data Component + Item Component.
* (Data Component) -> Players can see what other players have/want and with that info make decisions for themselves about how to proceed with they want in the future
* (Item Component) [Children] -> 
* CurrentItems Component (initial items a player has in game at the time they fill out the form) 
* ItemPriority Component (items a player wants in the future from participating in raid content in game)

-------------------------------
## Back End

* [] Authenticate, log users in (and keep them logged in) and log users out
* [] CRUD Operations for currentitems/items on prio list