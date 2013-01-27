function Npc(region, id) {
	var region = Math.floor(Math.random()*2);
	image = 'images/npc' + region + '.png';
	
	var pj = new Pj(region, image);
	pj.setId('npc' + id);
	
	console.log(region);	
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
		var neighbors = [[row - 1, col], [row, col + 1], [row + 1, col], [row, col -1]];
		
		var availableDirections = Array();
		var newDirection;
		
		for (var i = 0; i < neighbors.length; i++) {
			if (!collisions[neighbors[i][0]][neighbors[i][1]]) {
			
				if (neighbors[i][0] == row)
					newDirection = [0, ((neighbors[i][col] > col) ? 1 : -1)];
				else
					newDirection = [((neighbors[i][0] > row) ? 1 : -1), 0];
				
				if (Math.abs(newDirection[0]) != Math.abs(newDirection[0])) //Only can turn in other dimension
					availablePositions.push(newDirection);
			}
		}
		
		if (availableDirections.length == 0 && collisions[row + direction[0]][col + direction[1]]) {
			this.changeDirection();
		}
		
		return availableDirections;
	}
	
	
	this.step = function(availableDirections) {
		//Make a step of movement
		
		self.direction = availableDirections[Math.floor(Math.random() * availableDirections.length)];
		
		pj.addX(speed * direction[0]);
		pj.addY(speed * direction[1]);
	}

	city.addEventListener('enterframe', function() {
		switch(e.keyCode)
		{
			// S key
			case 83: 
				if (pj.isMoveAllowed('down', speed)) {
	        		pj.addY(speed);
	    		}
	   		    pj.sprite.frame = pj.forwardFrames;
	    		break;
	    	// A key
	    	case 65:
	   		    if (pj.isMoveAllowed('left', speed)) {
	   		     	pj.substractX(speed);
	   		    }
	   		    pj.sprite.frame = pj.forwardFrames;
	   		    break;
	   		// D key
	   		case 68:
	   		    if (pj.isMoveAllowed('right', speed)) {
	   			    pj.addX(speed);
	   			}

	   		    pj.sprite.frame = pj.forwardFrames;
	   		    break;
	   		// W key
	   		case 87:
	   		    if (pj.isMoveAllowed('up', speed)) {
	   		    	pj.substractY(speed);
	   		    }
				pj.sprite.frame = pj.backwardFrames;
	   		    break;
	    }
    });
    
    document.addEventListener('keyup', function(e) {
		switch(e.keyCode)
		{
			case 83: //down
		    case 65: //left
	   		case 68://right
	   			pj.sprite.frame = [];
	   			break;
	   		case 87://top
	   			pj.sprite.frame = [5];
	    }
    });

	city.addEventListener('enterframe', function() {
		if (frameCounter++ == waitingTime[region]) {
			var directions = self.getAvailableDirections();
		
			self.step(directions);
			frameCounter = 0;
		}
    });
}
