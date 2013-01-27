function Npc(region, id) {
	var region = Math.floor(Math.random()*2);
	image = 'images/npc' + region + '.png';
	
	var pj = new Pj(region, image);
	pj.setId('npc' + id);
	
	var direction = (Math.random() > 0.5) ? [0, 1] : [1, 0];
	var waitingTime = [30, 10];
	var frameCounter = 0;
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
	
	this.changeDirection = function() {
		if (direction[0] != 0)
			direction[0] = (-1) * direction[0];
		else
			direction[1] = (-1) * direction[1];
	}
	
	this.getAvailableDirections = function() {
		//Get the new possible directions (removing the actual)
		var tilePosition = pj.getActualPositionInTile();
		var row = tilePosition[0];
		var col = tilePosition[1];
		console.log(row, col)
		var neighbors = [[row - 1, col], [row, col + 1], [row + 1, col], [row, col -1]];
		
		var availableDirections = Array();
		var newDirection;
		console.log(neighbors);
		for (i = 0; i < neighbors.length; i++) {
		
			if (collisions[neighbors[i][1]][neighbors[i][0]] == 0) {
			
				if (neighbors[i][0] == row)
					newDirection = [0, ((neighbors[i][1] > col) ? 1 : -1)];
				else
					newDirection = [((neighbors[i][0] > row) ? 1 : -1), 0];
				
				if (Math.abs(newDirection[0]) != Math.abs(direction[0])) //Only can turn in other dimension
					availableDirections.push(newDirection);
			}
		}
		
		return availableDirections;
	}
	
	this.getDirectionString = function(directionVector) {
		if (directionVector[0] == 0)
			return (directionVector[1] > 0) ? 'right' : 'left';
		else
			return (directionVector[0] > 0) ? 'down' : 'up';
	}
	
	this.step = function(availableDirections) {
		//Make a step of movement
		if (availableDirections.length == 0 && !collisions[col + direction[1]][row + direction[0]]) {
			this.changeDirection();
		} else {
			this.direction = availableDirections[Math.floor(Math.random() * availableDirections.length)];
		}
		
		if (pj.isMoveAllowed(this.getDirectionString(direction), speed)) {
			pj.addX(speed * direction[0]);
			pj.addY(speed * direction[1]);
		}
	}
    

	city.addEventListener('enterframe', function() {
		if (frameCounter++ == waitingTime[region]) {
			var directions = self.getAvailableDirections();
		
			self.step(directions);
			frameCounter = 0;
		}
    });
}
