function getIntroScene() {
	intro = new Scene();

	score = 0;
	// Background image
	background = new Sprite(width, height);
	background.image = game.assets['images/inicio.png'];
	background.x = 0;
	background.y = 0;
	intro.addChild(background);

	startButton = new Sprite(100, 45);
	startButton.image = game.assets['images/bot_start.png'];
	startButton.x = 610;
	startButton.y = 430;
	intro.addChild(startButton);

	creditsButton = new Sprite(100, 45);
	creditsButton.image = game.assets['images/bot_credits.png'];
	creditsButton.x = 610;
	creditsButton.y = 500;
	intro.addChild(creditsButton);

	intro.addEventListener('touchend', function(enviroment) {
		console.log(enviroment);
		x = Math.floor(enviroment.localX);
		y = Math.floor(enviroment.localY);
		if (x > 610 && x < 710 && y > 430 && y < 475) {
			console.log('Go to the city');
			var instructions = getInstructionsScene();
    	    game.pushScene(instructions);
    	}

    	if (x > 610 && x < 710 && y > 500 && y < 545) {
    		var credits = getCreditsScene();
    		game.pushScene(credits);
    	}
	});

	return intro;
}