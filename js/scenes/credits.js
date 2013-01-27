function getCreditsScene() {
	credits = new Scene();
	// Background image
	background = new Sprite(width, height);
	background.image = game.assets['images/blackbackground.png'];
	background.x = 0;
	background.y = 0;
	credits.addChild(background);

	// Logo
	logo = new Sprite(400, 400);
	logo.image = game.assets['images/credits.png'];
	logo.x = 200;
	logo.y = 100;
	credits.addChild(logo);

	credits.addEventListener('touchend', function(enviroment) {
		intro = getIntroScene();
		game.pushScene(intro);
	});

	return credits;
}