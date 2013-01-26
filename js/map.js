function getGameMap() {
    map = new Map(tileSize, tileSize);
    map.image = game.assets['misc/tiles.gif'];
    map.loadData(map_matrix);
    map.collisionData = coll;
    return map;
}

function getAvailablePosition() {
    var x = Math.floor(Math.random()*horizontalTiles);
    var y = Math.floor(Math.random()*verticalTiles);
    var position = Array();
    if (isPositionAvailable(x, y)) {
        position['width'] = ((x)*tileSize)+3;
        position['height'] = ((y)*tileSize)-6;
    }
    else {
        position = getAvailablePosition();
    }
    return position;
}

function isPositionAvailable(x, y, transform) {
    if (transform == true) {
        x = (x - 3) / tileSize;
        y = (y + 6) / tileSize;
    }
    if (debug) {
        console.log('Map function isPositionAvailable');
        debugVars = [];
        debugVars[1] = x;
        debugVars[2] = y;
        debugVars[3] = transform;
        console.log(debugVars);
    }
    if (y > (verticalTiles - 1) || y < 0 || x > (horizontalTiles - 1) || x < 0 || collisions[y][x] > 0) {
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
function isNearCollision(paparazzi, celebrity, farAway) {
    if(paparazzi.getSprite.within(celebrity.getSprite, farAway)) {
        alert("He's near!");
    }
}
*/