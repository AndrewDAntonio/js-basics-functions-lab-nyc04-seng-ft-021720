// Code your solution in this file!
function distanceFromHqInBlocks(startRide) {
    const hqLocation = 42;
    let distance;

    if (startRide > hqLocation) {
        distance = startRide - hqLocation
    } else {
        distance = hqLocation - startRide
    };

    return distance;
}

function distanceFromHqInFeet(startRide) {
    let distance = distanceFromHqInBlocks(startRide) * 264;
    return distance;
}

function distanceTravelledInFeet(startRide, endRide) {
    let distance;

    if (startRide > endRide) {
        distance = (startRide - endRide) * 264
    } else {
        distance = (endRide - startRide) * 264
    };

    return distance;
}

function calculatesFarePrice(start, destination) {
    let fare;
    let totalDistance = distanceTravelledInFeet(start, destination)

    if (totalDistance < 400) {
        fare = 0
    } else if (totalDistance > 400 && totalDistance <= 2000 ) {
        fare = (totalDistance - 400) * 0.02
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        fare = 25
    } else {
        fare = `cannot travel that far`
    }
    return fare;    
}