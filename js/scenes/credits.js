function getCreditsScene() {
	credits = new Scene();
	// Background image
	background = new Sprite(width, height);
	background.image = game.assets['images/introbackground.png'];
	background.x = 0;
	background.y = 0;
	credits.addChild(background);

	// Logo
	logo = new Sprite(724, 110);
	logo.image = game.assets['images/logo.png'];
	logo.x = 43;
	logo.y = 100;
	credits.addChild(logo);

	credits.addEventListener('touchend', function(enviroment) {
		intro = getIntroScene();
		game.pushScene(intro);
	});

	return credits;
}