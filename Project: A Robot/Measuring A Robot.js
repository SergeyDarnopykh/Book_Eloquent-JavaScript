// Measuring a robot

// It’s hard to objectively compare robots by just letting them solve a few scenarios. 
// Maybe one robot just happened to get easier tasks, 
// or the kind of tasks that it is good at, whereas the other didn’t.

// Write a function compareRobots which takes two robots (and their starting memory). 
// It should generate a hundred tasks, and let each of the robots solve each of these tasks. 
// When done, it should output the average number of steps each robot took per task.

// For the sake of fairness, make sure that you give each task to both robots, 
// rather than generating different tasks per robot.

function runRobot(state, robot, memory) {
	for (let turn = 0;; turn++) {
		if (state.parcels.length == 0) {
			return turn;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
	}
}

function compareRobots(robot1, memory1, robot2, memory2) {
	function average(array) {
		return array.reduce((a, b) => a + b) / array.length;
	}

	const robot1Data = [], robot2Data = [];

	for (let i = 0; i < 100; i++) {
		const task = VillageState.random();
		robot1Data.push(runRobot(task, robot1, []));
		robot2Data.push(runRobot(task, robot2, []));
	}

	console.log(`${robot1.name} average steps: ${average(robot1Data)}`);
	console.log(`${robot2.name} average steps: ${average(robot2Data)}`);
}