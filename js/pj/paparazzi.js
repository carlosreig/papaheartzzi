function Paparazzi(spriteWidth, spriteHeight) {
	region = Math.floor(Math.random()*4);
	image = 'misc/walker.gif';
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
	});

	game.addEventListener('upbuttondown', function() {
	    if (pj.isMoveAllowed('up', speed)) {
	        pj.substractY(speed);
	    }
	});

	game.addEventListener('leftbuttondown', function() {
	    if (pj.isMoveAllowed('left', speed)) {
	        pj.substractX(speed);
	    }
	});

	game.addEventListener('rightbuttondown', function() {
	    if (pj.isMoveAllowed('right', speed)) {
	        pj.addX(speed);
	    }
	});

	game.addEventListener('abuttondown', function(e) {
	    game.assets['misc/camera.wav'].play();
	});
}