
function getCityScene() {
    gameScene = new Scene();
    var celebrity = new Celebrity(10, 30);
    var paparazzi = new Paparazzi(10, 30);
    
	//npcs here
	for (var i = 0; i < 0; i++) {
		var npc = new Npc(0, i);
		pjsList.push(npc);
	}
    pjsList.push(celebrity);
    pjsList.push(paparazzi);

    // Background music
    if (isMusicEnabled) {
        game.assets[sounds['bgm']].play();
    }

    // Heartbreak music
    if (isMusicEnabled) {
        game.addEventListener('enterframe', function() {
            frameCount = (frameCount + 1) % fps;
            if (frameCount == 0) {
                timer += 1;
                console.log(timer);
            }

            if ((timer % 88) == 0) {
                game.assets[sounds['bgm']].play();
            }
            switch (heartbeatLevel) {
                case 'slow':
                    game.assets[sounds['heart_slow']].play();
                    break;
                case 'normal':
                    game.assets[sounds['heart_normal']].play();
                    break;
                case 'quick':
                    game.assets[sounds['heart_quick']].play();
                    break;
            }
        });
    }

    gameScene.addChild(map);
    for (i = 0; i < pjsList.length; i++) {
        gameScene.addChild(pjsList[i].getSprite());
    }
    return gameScene;
}
