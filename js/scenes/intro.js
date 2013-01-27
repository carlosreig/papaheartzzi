function getIntroScene() {
	intro = new Scene();
	// Background image
	background = new Sprite(width, height);
	background.image = game.assets['images/introbackground.png'];
	background.x = 0;
	background.y = 0;
	intro.addChild(background);

	// Logo
	logo = new Sprite(724, 110);
	logo.image = game.assets['images/logo.png'];
	logo.x = 43;
	logo.y = 100;
	intro.addChild(logo);

	startButton = new Sprite(200, 200);
	startButton.image = game.assets['images/start.png'];
	startButton.x = 150;
	startButton.y = 300;
	intro.addChild(startButton);

	creditsButton = new Sprite(200, 200);
	creditsButton.image = game.assets['images/button.png'];
	creditsButton.x = 450;
	creditsButton.y = 300;
	intro.addChild(creditsButton);

	intro.addEventListener('touchend', function(enviroment) {
		console.log(enviroment);
		x = Math.floor(enviroment.localX);
		y = Math.floor(enviroment.localY);
		if (x > 150 && x < 350 && y > 300 && y < 500) {
			console.log('Go to the city');
			var city = getCityScene();
			score = 0;
    	    game.pushScene(city);
    	}

    	if (x > 450 && x < 600 && y > 300 && y < 500) {
    		var credits = getCreditsScene();
    		game.pushScene(credits);
    	}
	});

	return intro;
}