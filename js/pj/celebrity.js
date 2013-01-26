function Celebrity(spriteWidth, spriteHeight) {
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

	game.addEventListener('sbuttondown', function() {
	    if (isPositionAvailable(pj.getX(), (pj.getY()+speed), true)) {
	        pj.setY((pj.getY() + speed));
	    }
	});
	game.addEventListener('wbuttondown', function() {
	    if (isPositionAvailable(pj.getX(), (pj.getY()-speed), true)) {
	        pj.setY((pj.getY() - speed));
	    }
	});
	game.addEventListener('abuttondown', function() {
	    if (isPositionAvailable((pj.getX()-speed), pj.getY(), true)) {
	        pj.setX((pj.getX() - speed));
	    }
	});
	game.addEventListener('bbuttondown', function() {
	    if (isPositionAvailable((pj.getX()+speed), pj.getY(), true)) {
	        pj.setX((pj.getX() + speed));
	    }
	});

	/*game.addEventListener('keydown', function(e) {
        if (debug) {
			console.log("Paparazzi keydown event: ");
		    console.log(e.keyCode);
		}
	    game.assets['misc/camera.wav'].play();
	});*/
}