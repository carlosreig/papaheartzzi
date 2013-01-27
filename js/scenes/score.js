function getScoreScene() {
	scoreScreen = new Scene();
	// Background image
	background = new Sprite(width, height);

	if (score >= 1) {
		winner = 'paparatzzi';
		background.image = game.assets['images/paparazziwins.png'];
	}
	else {
		winner = 'celebrity';
		background.image = game.assets['images/celebritywins.png'];
	}

	background.x = 0;
	background.y = 0;
	scoreScreen.addChild(background);

	scoreScreen.addEventListener('touchend', function(enviroment) {
		mapReset();
		credits = getCreditsScene();
		game.pushScene(credits);
	});

	return scoreScreen;
}