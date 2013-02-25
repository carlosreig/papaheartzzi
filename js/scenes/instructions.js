function getInstructionsScene() {
    instructions = new Scene();
    instructionsPic = new Sprite(810, 600);
    instructionsPic.image = game.assets['images/instructions.png'];
    instructionsPic.x = 0;
    instructionsPic.y = 0;
    instructions.addChild(instructionsPic);

    instructions.addEventListener('touchend', function() {
        cityMap = getCityScene();
        game.pushScene(cityMap);
        /*rand = Math.floor(Math.random()*2);
        console.log(rand);
        if (rand == 1) {
            console.log('house');
            houseMap = getHouseScene();
            console.log(collisions);
            game.pushScene(houseMap);
        }
        else {
            console.log('garden');
            gardenMap = getGardenScene();
            console.log(collisions);
            game.pushScene(gardenMap);
        }*/
    });
    return instructions;
}