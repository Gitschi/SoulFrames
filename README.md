# SoulFrames
This project is a frame data application being developed with ionic for the game Soul Calibur 6™.
I laid the ground work for this project over the course of about 6 months while having no prior experience with Angular or Ionic.
For this reason I believe there are a lot of parts that need refactoring and improvement, however my focus is on making the app functional
and delivering correct frame data to the users as fast as possible and worry about improving performance and design after that.

We are using the intellectual property of Bandai Namco here and I'm doing my best not to infringe upon it by avoiding the usage of official
art and such. I had a short talk with the producer of the game and even though he couldn't give me an official OK on it, he seemed pleased
with the existance of such an app for the community as long as it is not being made with the goal of monitary gain.

## Set Up
Just download the repository, navigate to its root and run __npm install__ to download all dependencies.
After that you run __ionic serve__ and access the app from __localhost 8100__.

## File Structure
The heart of the project lies within the __src__ folder, while images and other assets are stored in __www/assets__.
Within the __src/pages__ folder, each component will have a ts file which controls the basic logic which is needed to display the correct values.
The bulk of the data however is handled within __src/services__ which sees the most changes and maintenance.

## Services
### Char Service
Holds an array of objects with all the characters and all sub components a character needs.
It holds a variable called selectedChar, which will be changed when the user clicks a character image.
At that point some functions will be run to attach the moves and stances onto this character and display them after loading the view.
It also holds an array of initialized characters. Initialized meaning that the string manipulation service was already run on then once since
starting the application. To see what exactly the __String Manipulation Service__ does, read below.
The structure of a character can be looked up under __src/models/char.model.ts__.

### Move Service
Holds an array of arrays of objects for the move list of each character. 
Each inner array corresponds to a move category (Gauge Attacks, Horizontals, Verticals, etc.). 
There is no set length, and each extra array that exists on top of the standard 8 categories, will be treated as an array of stance moves.
The structure of a move can be looked up under __src/models/move.model.ts__.

### Stance Service
Holds an array of stances or special states for each character that has at least one.
The structure of a stance can be looked up under __src/models/stance.model.ts__.

### String Manipulation Service
Since we use standard notations when filling in the data for moves in the __Move Service__ in order to keep the file readable, we
have to exchange them for images before showing the data to the user.
Command notations such as "66A+B" will have each cypher exchanged with an image path by this service. The same also holds true for 
the height levels of moves.
When adding or editing a move, make sure to check out the notations written down here.

#### Contact
* Soul Frames Discord: https://discord.gg/DaCRjrE
* My Discord: Gitschi#8564
* My Twitter: [@superturbokanji](https://twitter.com/SuperTurboKanji)
