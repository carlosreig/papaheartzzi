function customIntersect(firstSprite, secondSprite) {
    x = firstSprite.x;
    x1 = secondSprite.x;
    x2 = secondSprite.x + tileSize;
    y = firstSprite.y + firstSprite.height - tileSize;
    y1 = secondSprite.y + secondSprite.height - tileSize;
    y2 = secondSprite.y + secondSprite.height;
    hasFoundCollision = ((x >= x1 && x < x2) && (y >= y1 && y < y2));
    if (debug) {
        console.log(x);
        console.log(x1);
        console.log(x2);
        console.log(y);
        console.log(y1);
        console.log(y2);
        console.log(hasFoundCollision);
    }
    return hasFoundCollision;
}