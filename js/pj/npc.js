function Npc(region, id) {
	var region = region;
	image = 'images/npc' + region + '.png';
	
	var pj = new Pj(region, image);

	if (region == 2) {
		pj.spriteWidth = 15;
		pj.spriteHeight = 15;
	}

	pj.setId('npc' + id);
	
	var direction = directions[Math.floor(Math.random()*4)];
	var waitingTime = [30, 10, 20];

	var self = this;

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

	this.setDirection = function(direction) {
		this.direction = direction;
	}

	this.getDirection = function() {
		return this.direction;
	}
	
	this.getAvailableDirections = function() {
		availableDirections = Array();
		for (moves = 0; moves < 4; moves++) {
			possibleDirection = directions[moves];
			if (pj.isMoveAllowed(possibleDirection)) {
				availableDirections.push(possibleDirection);
			}
		}
		return availableDirections;
	}
	
	this.prepareNextMoveDirection = function() {
		availableDirections = this.getAvailableDirections();
		//Make a step of movement

		if (availableDirections.length == 0) {
			console.log(this.getId() + " is stuck");
		}
		else if (availableDirections.length == 1) {
			this.setDirection(availableDirections[0]);
		}
		else {
			finalDirections = Array();
			for (possibleMoves = 0; possibleMoves < availableDirections.length; possibleMoves++) {
				if (availableDirections[possibleMoves] !== getOppositeMovement(this.direction)) {
					finalDirections.push(availableDirections[possibleMoves]);
				}
			}
			nextMovement = Math.floor(Math.random()*finalDirections.length);
			this.setDirection(finalDirections[nextMovement]);
		}
	}

	city.addEventListener('enterframe', function() {
		if ((frameCount % waitingTime[region]) == 0) {
			self.prepareNextMoveDirection();
			switch(self.direction) {
				case 'up':
					pj.substractY(speed);
					break;
				case 'down':
					pj.addY(speed);
					break;
				case 'left':
					pj.substractX(speed);
					break;
				case 'right':
					pj.addX(speed);
					break;
			}
		}
    });
}