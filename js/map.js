function getGameMap() {
    map = new Map(tile_size, tile_size);
    map.image = game.assets['misc/tileMap.png'];
    map.loadData(map_matrix);
    map.collisionData = colMatrix;
    return map;
}

function getAvailablePosition(positions) {
    var x = Math.floor(Math.random()*horizontal_tiles);
    var y = Math.floor(Math.random()*vertical_tiles);
    var position = Array();
    
    if (isPositionAvailable(positions, x, y)) {
        position['width'] = ((x)*tile_size)+3;
        position['height'] = ((y)*tile_size)-6;
    }
    else {
        position = getAvailablePosition(positions);
    }
    
    return position;
}

function isPositionAvailable(x, y, transform) {
    if (transform == true) {
        x = (x - 3) / tile_size;
        y = (y + 6) / tile_size;
    }
    if (debug) {
        console.log('Map function isPositionAvailable');
        debugVars = [];
        debugVars[0] = colMatrix;
        debugVars[1] = x;
        debugVars[2] = y;
        debugVars[3] = transform;
        console.log(debugVars);
    }
    if (y > (vertical_tiles - 1) || y < 0 || x > (horizontal_tiles - 1) || x < 0 || colMatrix[y][x] > 0) {
        if (debug) {
            console.log('Position not available');
        }
        return false;
    }
    else {
        if (debug) {
            console.log('Position is available');
        }
        return true;
    }
}

/*
function isCollision(paparazziSprite, celebritySprite) {
    if (paparazziSprite.intersect(celebritySprite)) {
        alert("hit!");
    }
}
/*
function isNearCollision(paparazzi, celebrity, ) {
    if(paparazzi.getSprite.within(celebrity.getSprite, 40)) {
        alert("He's near!");
    }
}
*/
