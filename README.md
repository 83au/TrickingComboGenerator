# TrickingComboGenerator
## Download and run the app
1. `git clone https://github.com/83au/TrickingComboGenerator.git`
2. `npm install`
3. `npm start`

## Make changes
1. Make change and save 
2. Update cacheName inside ./src/service-worker.js
3. If changing styles add hash to stylesheet name in webpack config
4. `npm run build`
5. Update script and css file names inside './dist/service-worker.js' by copying them over from './dist/index.html'
6. `npm start` 

<!-- <p>Creates random combinations of tricks from the sport called Tricking. 
Tricking consists of combinations of "tricks" inspired by martial arts, gymnastics, and break dancing. </p>

<p>Users can choose from 2 modes: Build Combo or Random Combo. Build combo allows the user to build the combo one trick at a time, choosing the level of difficulty they want the trick to be. They can then move on to the next trick, or choose to redo the trick they are on, which randomly chooses another trick from the level of their choice. Random mode allows the user to choose a max difficulty and the number of tricks they want in the combo. Then the whole combo is generated at once.</p>

<p>Each trick is made up of 3 parts: A transition from the previous trick, the trick itself, and a landing position. There are multiple ways to transition, and there are multiple ways to land. The way a trick is landed determines which transitions it can utilize, and the chosen transition determines what tricks can be performed next.</p>

<p>The app's algorithm chooses a trick at random from the list of possible tricks, then it randomly chooses a landing from that trick's list of landings. The next trick is randomly chosen from a list of tricks that have a setup that matches the previous trick's chosen landing.</p>

<p>This app strives to include all the nuanced technicalities, while providing an efficient tool and/or game made for trickers and the sport they love.</p> -->



