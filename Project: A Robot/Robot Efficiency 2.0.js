// Robot efficiency

// Can you write a robot that finishes the delivery task faster than goalOrientedRobot? 
// If you observe that robot’s behavior, what obviously stupid things does it do? 
// How could those be improved?

// If you solved the previous exercise, 
// you might want to use your compareRobots function to verify whether you improved the robot.


// Note: I wrote this solution after I realised that parcel processing can be simplified. 

function yourRobot({place, parcels}, route) {
	function findMinArray(arr1, arr2) {
		if (typeof arr1 !== 'object') return arr2;
		if (typeof arr2 !== 'object') return arr1;
    
    	return arr1.length < arr2.length ? arr1 : arr2;
    }
  
  	if (route.length == 0) {
        const routes = parcels.map(parcel => {
            return (parcel.place === place) ? findRoute(roadGraph, place, parcel.address) :
                findRoute(roadGraph, place, parcel.place);
        })

        route = routes.reduce((route1, route2) => {
            return findMinArray(route1, route2);
        })
    }
  	
  	return {direction: route[0], memory: route.slice(1)};
}
