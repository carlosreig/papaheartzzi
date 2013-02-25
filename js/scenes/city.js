function getCityScene() {
    city = new Scene();
    city.addChild(getCityGameMap());

    var celebrity = new Celebrity();
    var paparazzi = new Paparazzi();

	// npcs here
	for (var i = 0; i < 24; i++) {
		var npc = new Npc(Math.floor(Math.random()*7), i);
		pjsList.push(npc);
	}
    npc = new Npc(8, pjsList.length);
    console.log(npc.getId());
    pjsList.push(npc);
    console.log(npc);

    pjsList.push(celebrity);
    pjsList.push(paparazzi);

    // Background music
    if (isMusicEnabled) {
        game.assets[sounds['bgm']].play();
    }

    city.addEventListener('enterframe', function() {
        frameCount = (frameCount + 1) % fps;
        if (frameCount == 0) {
            timer += 1;
        }

        if ((timer > 0 && (timer % timerOut) == 0) || score == 1) {
            game.assets[sounds['bgm']].stop();
            scoreScene = getScoreScene();
            game.pushScene(scoreScene);  
        }

        if (isMusicEnabled) {
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
        }
    });

    city.addChild(map);
    for (i = 0; i < pjsList.length; i++) {
        city.addChild(pjsList[i].getSprite());
    }
    return city;
}
