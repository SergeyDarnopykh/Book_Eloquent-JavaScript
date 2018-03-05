# A modular Robot

## Bindings
1. `roads` - an array of roads between houses.
2. `buildGraph` - function that takes an array of roads and converts it into a graph object.
3. `roadGraph` - the result of execution `buildGraph(roads)`.
4. `VillageState` - class that stores info about `current robot place` and all info about `parcels`. Besides, it provides the method to `move` the robot, changing the `parcels` info respectively. Also, in has the method to generate `random` Village state (robot `starting position` and `parcels` info). It uses `roadGraph`, `randomPick`.
5. `runRobot` - function that simulates entire robot's journey. It uses starting `Village State`, `robot` that will be used to deliver packages and starting robot memory.
6. `randomPick` - function that returns random element from the array.
7. `randomRobot` - robot that just goes to a random place on the map. It uses `roadGraph`, current `Village State` and `randomPick` function.
8. `mailRoute` - route through all of the Village.
9. `routeRobot` - robot that does the `mailRoute` twice, delivering all of the packages this way. It uses `roadGraph`, current `Village State`.
10. `findRoute` - function that takes `graph`, `graph node A` and `graph node B` as parameters, and finds the shortest route from `graph node A` to `graph node B`.
11. `goalOrientedRobot` - robot that delivers all of the packages one by one from the list. It uses `roadGraph`, current `Village State`. 

## Questions
### If you were to write that project as a modular program, what modules would you create? Which module would depend on which other module, and what would their interfaces look like?
1. GraphBuilder
**Requires:**
	`buldGraph` - npm module
**Owns:**
	`roads` - array
**Exports**
	`roadGraph` - graph object that contains all of the roads.

2. VillageState
**Requires:**
	`GraphBuilder` - our module
	`randomPick` - npm module
**Exports**
	`VillageState` class
	(it can be done either way)

3. Robots
**Requires:**
	`randomPick` - npm module
	`findRoute` - npm module
	`VillageState` - our module
	
**Owns**
	`mailRoute` - array

**Exports:**
	`randomRobot` - function
	`routeRobot` - function
	`goalOrientedRobot` - function
	`runRobot` - function


	
### Which pieces are likely to be available pre-written on NPM? 
Look at the answer above.

### Would you prefer to use an NPM package or to write them yourself?
Of course I would prefer to use an NPM package.