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

	city.addEventListener('downbuttondown', function() {
	    if (pj.isMoveAllowed('down', speed)) {
	        pj.addY(speed);
	    }
	    updateHeartSound();
	    pj.sprite.frame = pj.forwardFrames;
	});

	city.addEventListener('upbuttondown', function() {
	    if (pj.isMoveAllowed('up', speed)) {
	        pj.substractY(speed);
	    }
	    updateHeartSound();
	    pj.sprite.frame = pj.backwardFrames;
	});

	city.addEventListener('leftbuttondown', function() {
	    if (pj.isMoveAllowed('left', speed)) {
	        pj.substractX(speed);
	    }
	    updateHeartSound();
	    pj.sprite.frame = pj.forwardFrames;
	});

	city.addEventListener('rightbuttondown', function() {
	    if (pj.isMoveAllowed('right', speed)) {
	        pj.addX(speed);
	    }
	    updateHeartSound();
	    pj.sprite.frame = pj.forwardFrames;
	});

	city.addEventListener('abuttondown', function() {
	    game.assets[sounds['camera']].play();
	    firstSprite = pj.getSprite();
	    celeb = getCelebrity();
	    console.log(celeb);
	    secondSprite = celeb.getSprite();
	    isAtShotDistance = isNearCollision(firstSprite, secondSprite, 50);
	    console.log(isAtShotDistance);
		if (isAtShotDistance) {
			score += 1;
			celebPosition = getCelebrityPosition();
			city.removeChild(pjsList[celebPosition].getSprite());
			deleteCelebrity(celebPosition);
			celebrity = new Celebrity();
			pjsList.push(celebrity);
			city.addChild(celebrity.getSprite());
			randomPosition = getAvailablePosition(collisions);
			game.assets[sounds['screamShort']].play();
		}
	});

	city.addEventListener('downbuttonup', function() {
	    pj.sprite.frame = [];
	});

	city.addEventListener('upbuttonup', function() {
		pj.sprite.frame = [6];
	});

	city.addEventListener('leftbuttonup', function() {
	   pj.sprite.frame = [];
	});

	city.addEventListener('rightbuttonup', function() {
	    pj.sprite.frame = [];
	});
}
