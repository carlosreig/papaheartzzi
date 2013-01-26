function Pj(region, spriteWidth, spriteHeight, spriteImage) {
	this.sprite = new Sprite(spriteWidth, spriteHeight);
	this.sprite.image = game.assets[spriteImage];
	this.position = getAvailablePosition(collisions);
	this.forwardFrames = [0, 1, 2, 1, 0, 3, 4, 3];
	this.backwardFrames = [5, 6, 7, 6, 8, 9, 8];
	
	this.sprite.x = this.position['width'];
	this.sprite.y = this.position['height'];

	this.getSprite = function() {
		return this.sprite;
	}

	this.setX = function(x) {
		this.sprite.x = x;
	}

	this.setY = function(y) {
		this.sprite.y = y;
	}

	this.getX = function() {
		return this.sprite.x;
	}

	this.getY = function() {
		return this.sprite.y;
	}

}
