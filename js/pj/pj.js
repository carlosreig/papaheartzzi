function Pj(region, spriteWidth, spriteHeight, spriteImage) {
	this.sprite = new Sprite(spriteWidth, spriteHeight);
	this.sprite.image = game.assets[spriteImage];
	this.position = getAvailablePosition(colMatrix);
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
