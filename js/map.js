function getGameMap() {
    map = new Map(tileSize, tileSize);
    randomMap = Math.floor(Math.random()*2)+1;
    map.image = game.assets['images/tileMap' + randomMap + '.png'];
    switch(randomMap) {
        case 1:
            map_matrix = map_matrix1;
            collisions = collisions1;
            break;
        case 2:
            map_matrix = map_matrix2;
            collisions = collisions2;
            break;
    }
    map.loadData(map_matrix);
    map.collisionData = collisions;
    
    return map;
}

function getAvailablePosition() {
    var x = Math.floor(Math.random()*horizontalTiles);
    var y = Math.floor(Math.random()*verticalTiles);
    var position = Array();

    if (isPositionAvailable(x, y)) {
        position['width'] = ((x)*tileSize);
        position['height'] = ((y)*tileSize);
    }
    else {
        position = getAvailablePosition();
    }
    
    return position;
}

function isPositionAvailable(x, y, transform) {
    if (transform == true) {
        x = (x) / tileSize;
        y = (y) / tileSize;
    }
    if (debug) {
        console.log('Map function isPositionAvailable');
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

function mapReset() {
    pjsList = [];
    score = 0;
    timer = 0;
    frame = 0;
}