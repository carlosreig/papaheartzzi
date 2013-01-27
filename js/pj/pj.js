function Pj(region, spriteWidth, spriteHeight, spriteImage) {
	this.spriteWidth = spriteWidth;
	this.spriteHeight = spriteHeight;
	this.sprite = new Sprite(spriteWidth, spriteHeight);
	this.sprite.image = game.assets[spriteImage];

	this.position = getAvailablePosition(collisions);
	this.forwardFrames = [0, 1, 2, 1, 0, 3, 4, 3];
	this.backwardFrames = [5, 6, 7, 6, 8, 9, 8];
	
	this.sprite.x = this.position['width'];
	this.sprite.y = this.position['height'] - (spriteHeight-tileSize);

	this.id = 'pj';

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

	this.addX = function(movement) {
		this.sprite.x += movement;
	}

	this.addY = function(movement) {
		this.sprite.y += movement;
	}

	this.substractX = function(movement) {
		this.sprite.x -= movement;
	}

	this.substractY = function(movement) {
		this.sprite.y -= movement;
	}

	this.setId = function(id) {
		this.id = id;
	}

	this.getId = function() {
		return this.id;
	}

	this.isMoveAllowed = function(direction, movement) {
		for (i = 0; i < pjsList.length; i++) {
			otherPj = pjsList[i];
			if (this.id != otherPj.getId()) {
				switch (direction) {
					case 'up':
						this.substractY(movement);
						break;
					case 'down':
						this.addY(movement);
						break;
					case 'left':
						this.substractX(movement);
						break;
					case 'right':
						this.addX(movement);
						break;
				}
				if (hasCollided(this.getSprite(), otherPj.getSprite())) {
					if (debug) {
						console.log('Has collided with other sprite:');
						console.log(otherPj.getId());
					}
					switch (direction) {
						case 'up':
							this.addY(movement);
							break;
						case 'down':
							this.substractY(movement);
							break;
						case 'left':
							this.addX(movement);
							break;
						case 'right':
							this.substractX(movement);
							break;
					}
					return false;
				}
				switch (direction) {
					case 'up':
						this.addY(movement);
						break;
					case 'down':
						this.substractY(movement);
						break;
					case 'left':
						this.addX(movement);
						break;
					case 'right':
						this.substractX(movement);
						break;
				}
			}
		}
		switch(direction) {
			case 'up':
				if (!isPositionAvailable(this.getX(), (this.getY()+(spriteHeight-tileSize)-speed), true)) {
					return false;
				}
				break;
			case 'down':
				if (!isPositionAvailable(this.getX(), (this.getY()+(spriteHeight-tileSize)+speed), true)) {
					return false;
				}
				break;
			case 'left':
				if (!isPositionAvailable((this.getX()-speed), this.getY()+(spriteHeight-tileSize), true)) {
					return false;
				}
				break;
			case 'right':
				if (!isPositionAvailable((this.getX()+speed), this.getY()+(spriteHeight-tileSize), true)) {
					return false;
				}
				break;
		}
		return true;
	}
}

function hasCollided(firstSprite, secondSprite) {
    if (customIntersect(firstSprite, secondSprite)) {
        return true;
    }
    return false;
}

function isNearCollision(firstSprite, secondSprite, tilesAway) {
    if(firstSprite.getSprite.within(secondSprite.getSprite, tilesAway)) {
        return true;
    }
    return false;
}
