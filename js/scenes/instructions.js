function getInstructionsScene() {
    instructions = new Scene();
    instructionsPic = new Sprite(810, 600);
    instructionsPic.image = game.assets['images/instructions.png'];
    instructionsPic.x = 0;
    instructionsPic.y = 0;
    instructions.addChild(instructionsPic);

    instructions.addEventListener('touchend', function() {
        city = getCityScene();
        game.pushScene(city);
    });

    return instructions;
}
