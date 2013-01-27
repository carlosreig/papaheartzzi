function Pj(region, spriteImage) {
	this.spriteWidth = 20;
	this.spriteHeight = 60;
	this.sprite = new Sprite(this.spriteWidth, this.spriteHeight);
	this.sprite.image = game.assets[spriteImage];

	this.position = getAvailablePosition(collisions);
	this.forwardFrames = [0, 1, 2, 1, 0, 3, 4, 3];
	this.backwardFrames = [5, 6, 7, 6, 8, 9, 8];
	
	this.sprite.x = this.position['width'];
	this.sprite.y = this.position['height'] - (this.spriteHeight-tileSize);

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
	
	this.getActualPositionInTile = function() {
		tileHorizontal = this.getX() / tileSize;
		tileVertical = this.getY() / tileSize;
		
		return [tileHorizontal, tileVertical];
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
				if (!isPositionAvailable(this.getX(), (this.getY()+(this.spriteHeight-tileSize)-speed), true)) {
					return false;
				}
				break;
			case 'down':
				if (!isPositionAvailable(this.getX(), (this.getY()+(this.spriteHeight-tileSize)+speed), true)) {
					return false;
				}
				break;
			case 'left':
				if (!isPositionAvailable((this.getX()-speed), this.getY()+(this.spriteHeight-tileSize), true)) {
					return false;
				}
				break;
			case 'right':
				if (!isPositionAvailable((this.getX()+speed), this.getY()+(this.spriteHeight-tileSize), true)) {
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
    if(firstSprite.within(secondSprite, tilesAway)) {
        return true;
    }
    return false;
}

function updateHeartSound() {
	first = pjsList.length - 1;
	second = first - 1;
	paparatzzi = pjsList[first].getSprite();
	celebrity = pjsList[second].getSprite();
	if (isNearCollision(paparatzzi, celebrity, 50)) {
		heartbeatLevel = 'quick';
	}
	else if (isNearCollision(paparatzzi, celebrity, 150)) {
		heartbeatLevel = 'normal';
	}
	else {
		heartbeatLevel = 'slow';
	}
}

function getCelebrity() {
	position = getCelebrityPosition();
	if (position !== false) {
		return pjsList[position];
	}
	return false;
}

function getCelebrityPosition() {
	for (i = pjsList.length - 1; i >= 0; i--) {
		if (pjsList[i].getId() == 'celebrity') {
			return i;
		}
	}
	return false;
}

function deleteCelebrity(celebPosition) {
	if (celebPosition == (pjsList.length - 1)) {
		pjsList.pop();
	}
	else {
		celeb = pjsList[celebPosition];
		temp = pjsList[pjsList.length - 1];
		pjsList[pjsList.length - 1] = celeb;
		pjsList[celebPosition] = temp;
		pjsList.pop();
	}
}
