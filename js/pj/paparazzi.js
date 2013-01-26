function Paparazzi(spriteWidth, spriteHeight) {
	region = Math.floor(Math.random()*4);
	var pj = new Pj(region, spriteWidth, spriteHeight);

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

	game.addEventListener('downbuttondown', function() {
		if (debug) {
			console.log('Paparazzi event: downbuttondown');
		}
	    if (isPositionAvailable(pj.getX(), (pj.getY()+speed), true)) {
	        pj.setY((pj.getY() + speed));
	    }
	});

	game.addEventListener('upbuttondown', function() {
		if (debug) {
			console.log('Paparazzi event: upbuttondown');
		}
	    if (isPositionAvailable(pj.getX(), (pj.getY()-speed), true)) {
	        pj.setY((pj.getY() - speed));
	    }
	});

	game.addEventListener('leftbuttondown', function() {
		if (debug) {
			console.log('Paparazzi event: leftbuttondown');
		}
	    if (isPositionAvailable((pj.getX()-speed), pj.getY(), true)) {
	        pj.setX((pj.getX()- speed));
	    }
	});

	game.addEventListener('rightbuttondown', function() {
		if (debug) {
			console.log('Paparazzi event: rightbuttondown');
		}
	    if (isPositionAvailable((pj.getX()+speed), pj.getY(), true)) {
	        pj.setX((pj.getX() + speed));
	    }
	});

	game.addEventListener('abuttondown', function(e) {
		if (debug) {
			console.log("Paparazzi keydown event: ");
		    console.log(e.keyCode);
		}
	    game.assets['misc/camera.wav'].play();
	});
}