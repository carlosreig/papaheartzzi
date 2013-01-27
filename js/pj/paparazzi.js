function Paparazzi(spriteWidth, spriteHeight) {
	region = Math.floor(Math.random()*4);
	image = 'images/paparazzi.png';
	var pj = new Pj(region, spriteWidth, spriteHeight, image);
	pj.setId('paparazzi');

	this.getSprite = function() {
		return pj.getSprite();
	}

	this.setX = function(x) {
		pj.setX(x);
	}

	this.setY = function(y) {
		pj.setY(y);
	}

	this.getX = function() {
		return pj.getX();
	}

	this.getY = function() {
		return pj.getY();
	}

	this.getId = function() {
		return pj.getId();
	}

	game.addEventListener('downbuttondown', function() {
	    if (pj.isMoveAllowed('down', speed)) {
	        pj.addY(speed);
	    }
	    pj.sprite.frame = pj.forwardFrames;
	});

	game.addEventListener('upbuttondown', function() {
	    if (pj.isMoveAllowed('up', speed)) {
	        pj.substractY(speed);
	    }

	    pj.sprite.frame = pj.backwardFrames;
	});

	game.addEventListener('leftbuttondown', function() {
	    if (pj.isMoveAllowed('left', speed)) {
	        pj.substractX(speed);
	    }
	    pj.sprite.frame = pj.forwardFrames;
	});

	game.addEventListener('rightbuttondown', function() {

	    if (pj.isMoveAllowed('right', speed)) {
	        pj.addX(speed);
	    }
	    pj.sprite.frame = pj.forwardFrames;
	});

	game.addEventListener('abuttondown', function() {
	    game.assets[sounds['camera']].play();
	    firstSprite = pj.getSprite();
	    secondSprite = pjsList[0].getSprite();
	    almostCollided = isNearCollision(firstSprite, secondSprite, 100);
	    console.log(almostCollided);
		if (almostCollided) {
			game.assets[sounds['screamShort']].play();
		}
	});
	
	game.addEventListener('downbuttonup', function() {
	    pj.sprite.frame = [];
	});

	game.addEventListener('upbuttonup', function() {
		pj.sprite.frame = [6];
	});

	game.addEventListener('leftbuttonup', function() {
	   pj.sprite.frame = [];
	});

	game.addEventListener('rightbuttonup', function() {
	    pj.sprite.frame = [];
	});

	document.addEventListener('keydown', function(e) {
		console.log(e.keyCode);
		switch(e.keyCode)
		{
			case '':
			    game.assets['misc/camera.wav'].play();
			    break;
		}
	});
}
