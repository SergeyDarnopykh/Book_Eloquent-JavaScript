// Robot efficiency

// Can you write a robot that finishes the delivery task faster than goalOrientedRobot? 
// If you observe that robot’s behavior, what obviously stupid things does it do? 
// How could those be improved?

// If you solved the previous exercise, 
// you might want to use your compareRobots function to verify whether you improved the robot.

function yourRobot({place, parcels}, route) {
	function findMinArray(arr1, arr2) {
		if (typeof arr1 !== 'object') return arr2;
		if (typeof arr2 !== 'object') return arr1;
    
    	return arr1.length < arr2.length ? arr1 : arr2;
    }
  
  	if (route.length == 0) {
 		const carriedParcels = parcels.filter(parcel => parcel.place === place);
    	const waitingParcels = parcels.filter(parcel => parcel.place !== place);
    
    	const minCarriedRoute = carriedParcels.length && 
        	carriedParcels.reduce((parcel1, parcel2) => {
    			const route1 = findRoute(roadGraph, place, parcel1.address),
    				route2 = findRoute(roadGraph, place, parcel2.address);

    			return findMinArray(route1, route2);
    		}, Infinity);
    
    	const minWaitingRoute =  waitingParcels.length &&
			waitingParcels.reduce((parcel1, parcel2) => {
				const route1 = findRoute(roadGraph, place, parcel1.place),
	    			route2 = findRoute(roadGraph, place, parcel2.place);
	            
	    		return findMinArray(route1, route2);
	    	}, Infinity);
	    
    	route = findMinArray(minCarriedRoute, minWaitingRoute);    
    }
  	
  	return {direction: route[0], memory: route.slice(1)};
}

