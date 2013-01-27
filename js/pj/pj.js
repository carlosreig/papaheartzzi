function Pj(region, spriteImage) {
	if (spriteImage == 'images/npc2.png') {
		this.spriteWidth = 15;
		this.spriteHeight = 15;
	}
	else {
		this.spriteWidth = 20;
		this.spriteHeight = 60;
	}
	this.sprite = new Sprite(this.spriteWidth, this.spriteHeight);
	this.sprite.image = game.assets[spriteImage];

	this.position = getAvailablePosition(collisions);
	this.forwardFrames = [0, 1, 2, 1, 0, 3, 4, 3];
	this.backwardFrames = [5, 6, 7, 6, 8, 9, 8];
	
	this.sprite.x = this.position['width'];
	this.sprite.y = this.position['height'] - (this.spriteHeight-tileSize);

	this.id = 'pj' + spriteImage;

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

	this.addX = function(speed) {
		this.sprite.x += speed;
	}

	this.addY = function(speed) {
		this.sprite.y += speed;
	}

	this.substractX = function(speed) {
		this.sprite.x -= speed;
	}

	this.substractY = function(speed) {
		this.sprite.y -= speed;
	}

	this.setId = function(id) {
		this.id = id;
	}

	this.getId = function() {
		return this.id;
	}
	
	this.getActualPositionInTile = function() {
		tileHorizontal = this.getX() / tileSize;
		tileVertical = this.getY() + this.spriteHeight - tileSize / tileSize;
		
		return [tileHorizontal, tileVertical];
	}

	this.isMoveAllowed = function(moveDirection) {
		for (pjNum = 0; pjNum < pjsList.length; pjNum++) {
			otherPj = pjsList[pjNum];
			if (this.id != otherPj.getId()) {
				switch (moveDirection) {
					case 'up':
						this.substractY(speed);
						break;
					case 'down':
						this.addY(speed);
						break;
					case 'left':
						this.substractX(speed);
						break;
					case 'right':
						this.addX(speed);
						break;
				}
				if (hasCollided(this.getSprite(), otherPj.getSprite())) {
					if (debug) {
						console.log('Has collided with other sprite:');
						console.log(otherPj.getId());
					}
					if (otherPj.getId() == 'npc6') {
						game.assets[sounds['dog']].play();
					}
					switch (moveDirection) {
						case 'up':
							this.addY(speed);
							break;
						case 'down':
							this.substractY(speed);
							break;
						case 'left':
							this.addX(speed);
							break;
						case 'right':
							this.substractX(speed);
							break;
					}
					return false;
				}
				switch (moveDirection) {
					case 'up':
						this.addY(speed);
						break;
					case 'down':
						this.substractY(speed);
						break;
					case 'left':
						this.addX(speed);
						break;
					case 'right':
						this.substractX(speed);
						break;
				}
			}
		}
		switch(moveDirection) {
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

function getOppositeMovement(movementDirection) {
	opposites = [];
	opposites['left'] = 'right';
	opposites['right'] = 'left';
	opposites['up'] = 'down';
	opposites['down'] = 'up';
	return opposites[movementDirection];
}