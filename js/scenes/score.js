function getScoreScene() {
	scoreScreen = new Scene();
	// Background image
	background = new Sprite(width, height);

	if (score < 3) {
		winner = 'celebrity';
		background.image = game.assets['images/celebritywins.png'];
	}
	else {
		winner = 'paparatzzi';
		background.image = game.assets['images/paparazziwins.png'];
	}

	background.x = 0;
	background.y = 0;
	scoreScreen.addChild(background);

	scoreScreen.addEventListener('touchend', function(enviroment) {
		credits = getCreditsScene();
		game.pushScene(credits);
	});

	return scoreScreen;
}