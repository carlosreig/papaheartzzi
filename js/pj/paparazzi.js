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

	    pj.sprite.frame = pj.forwardFrames;
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
	
	game.addEventListener('downbuttonup', function() {
	    pj.sprite.frame = [];
	});

	game.addEventListener('upbuttonup', function() {
		pj.sprite.frame = [];
	});

	game.addEventListener('leftbuttonup', function() {
	   pj.sprite.frame = [];
	});

	game.addEventListener('rightbuttonup', function() {
	    pj.sprite.frame = [];
	});

	document.addEventListener('keydown', function(e) {
		switch(e.keyCode)
		{
			case '':
			    game.assets['misc/camera.wav'].play();
			    break;
		}
	});
}
