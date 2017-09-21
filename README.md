Zombie Survival README.md 

## TECHNOLOGIES AND PREMISE

A simple point and click shooter game using a zombie theme using the technologies learned in the first 2 weeks of my training. 
The game has a method of keeping track of user score and also an ammo counter. 
After a score threshold is reached, a boss zombie also spawns. 
The technologies learned so far are HTML5, CSS3, and Javascript along with jQuery.

During the game the the overrun bar increases incrementally, this represents the user being overrun by the zombies. Reduction of the bar is caused by shooting (clicking) the zombies, shooting the boss zombies results in a larger decrease. A full overrun bar reveals the game over function, while causing the bar to go to 0 results in a victory screen. 


## FEATURES AND IMPLEMENTATION 

Cohesive art style using sprites and background that match. (HTML and CSS).
Animations that appear random (jquery animations). 
When clicked, the sprites have an image appear to give the appearance of being shot (CSS + jQuery)
New instance of sprites each time it is presented on the stage. 
Boss zombies appear when user performs well. (jQuery)
Overrun bar presents a win and lose condition, increases incrementally. Increments increase if user performs well as a way to “level up” the game (jQuery).
Ammo function, after 6 shots there is a delay while the game reloads the weapon where the user is unable to interact with anything on the game stage (jQuery).


## HOW TO PLAY:

Clone the repository located at:  https://github.com/djonesdev/Project_1---JS-Zombie-Shooter
You can also review the latest version of the code here. 
open index.html via the terminal and the game will run from your default browser. 

Play game: https://djonesdev.github.io/Project_1---JS-Zombie-Shooter/
 