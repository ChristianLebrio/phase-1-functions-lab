// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber >= 42){
        return blockNumber - 42;
    }
    else{
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(block1, block2){
    if (block1 >= block2){
        return (block1 - block2) * 264;
    }
    else{
        return (block2 - block1) * 264;
    }
}

function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination)

    if (distanceInFeet <= 400){
        return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet < 2000){
        return (distanceInFeet - 400) * .02;
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }

}