function Pj(region, spriteWidth, spriteHeight) {
	sprite = new Sprite(spriteWidth, spriteHeight);
	sprite.image = game.assets['misc/walker.gif'];
	position = getAvailablePosition(coll);
	sprite.x = position['width'];
	sprite.y = position['height'];

	this.getSprite = function() {
		return sprite;
	}

	this.setX = function(x) {
		sprite.x = x;
	}

	this.setY = function(y) {
		sprite.y = y;
	}

	this.getX = function() {
		return sprite.x;
	}

	this.getY = function() {
		return sprite.y;
	}
}