# Bowler
__I have made some small changes to application after sending the enail to marielle. If you guys want to see the old version you get check out the old-version branch.__

This project is build for cloudwise. It is an bowling application to add calculate a bowling score. the app is build using angular.

## some decisions made
### models
Models should only contain some data that is needed they should not contain any business logic. The data inside the model can easily be stored in some server.

### services
services should be responsible for managing state inside the application. In this case the game service is responsible for adding throws and keeping track of the game state.

### exception handling
Exception handling (like the max amount of player in the game), should be checked inside the component, they can then easily show an error message to the user to provide them instructions on what they should fix.

### seperate pin module
The inserting pins is done via a seperate module. It will push the values to a subject. Via this method, the way of inserting pin can be easily switched without changing to much code.

### pipes calculate data
Calculating the score should is done via a pipe so we don't mix change the model data.

### code styling
I prefer making an unnecessary calculations over readability. Every function has it variables used defined at the top.

### component organisation
#### dumb and smart components
The game component. is a smartcomponent this component will interact with service and will get the current game. The create game component is a dumb component. Instead of calling create game directly on the service, it will emit an event so the gamecomponent can create the game.

#### conditionally rendering via states
In the game component the components are rendered via state. At this we dont have to use multiple boolean properties (like a hasGame and a isGameOver property) to define what views is needed to be loaded. This will also make animating between different views a lot easier.


## some knwon bugs
- Total score gets not updated correctly when a strike or spare is thrown. This can be fixed by creating a seperate pipe for the total score.
- Second and third strike are shown as 10 in the last turn.
- results screen should check if the game is a draw

## testing
Due to the lack of time I was not able to test everything. However some files do have unit tests. You can check the score pipe, the create-game component and the total helpers, to see how I would test all the code.

### things that i can improve
__styling__ use more responsive way of setting up styles instead of using pixels for width
make code.
