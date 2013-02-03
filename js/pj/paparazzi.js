function Paparazzi() {
	region = Math.floor(Math.random()*4);
	image = 'images/paparazzi.png';
	var pj = new Pj(region, image);
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
	    updateHeartSound();
	    pj.sprite.frame = pj.forwardFrames;
	});

	game.addEventListener('upbuttondown', function() {
	    if (pj.isMoveAllowed('up', speed)) {
	        pj.substractY(speed);
	    }
	    updateHeartSound();
	    pj.sprite.frame = pj.backwardFrames;
	});

	game.addEventListener('leftbuttondown', function() {
	    if (pj.isMoveAllowed('left', speed)) {
	        pj.substractX(speed);
	    }
	    updateHeartSound();
	    pj.sprite.frame = pj.forwardFrames;
	});

	game.addEventListener('rightbuttondown', function() {
	    if (pj.isMoveAllowed('right', speed)) {
	        pj.addX(speed);
	    }
	    updateHeartSound();
	    pj.sprite.frame = pj.forwardFrames;
	});

	game.addEventListener('abuttondown', function() {
	    game.assets[sounds['camera']].play();
	    firstSprite = pj.getSprite();
	    celeb = getCelebrity();
	    console.log(celeb);
	    secondSprite = celeb.getSprite();
	    isAtShotDistance = isNearCollision(firstSprite, secondSprite, 50);
	    console.log(isAtShotDistance);
		if (isAtShotDistance) {
			score += 1;
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
}