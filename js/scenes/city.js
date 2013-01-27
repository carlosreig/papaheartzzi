
function getCityScene() {
    city = new Scene();
    var celebrity = new Celebrity();
    var paparazzi = new Paparazzi();

    pjsList[0] = celebrity;
    pjsList[1] = paparazzi;
    //var npc = new Npc(0, 0);
	//npcs here
	//pjsList.push(npc);
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

        if (isMusicEnabled) {
            if ((timer % 88) == 0) {
                game.assets[sounds['bgm']].play();
            }
        }

        if ((timer > 0 && (timer % 120) == 0) || score == 3) {
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