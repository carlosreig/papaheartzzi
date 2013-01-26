function Celebrity(spriteWidth, spriteHeight) {
	region = Math.floor(Math.random()*4);
	image = 'images/celebrity.png';
	var pj = new Pj(region, spriteWidth, spriteHeight, image);
	pj.setId('celebrity');

	var forwardFrames = [0, 1, 2, 1, 0, 3, 4, 3];
	var backwardFrames = [5, 6, 7, 6, 8, 9, 8];
	pj.sprite.frame = forwardFrames;

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

	document.addEventListener('keydown', function(e) {
		switch(e.keyCode)
		{
			// S key
			case 83: 
				if (pj.isMoveAllowed('down', speed)) {
	        		pj.addY(speed);
	    		}
	    		break;
	    	// A key
	    	case 65:
	   		    if (pj.isMoveAllowed('left', speed)) {
	   		     	pj.substractX(speed);
	   		    }
	   		    
	   		    pj.sprite.frame = forwardFrames;
	   		    break;
	   		// D key
	   		case 68:
	   		    if (pj.isMoveAllowed('right', speed)) {
	   			    pj.addX(speed);
	   		// W key
	   		case 87:
	   		    if (pj.isMoveAllowed('up', speed)) {
	   		    	pj.substractY(speed);
	   		    }
				pj.sprite.frame = backwardFrames;
	   		    break;
	    }
    });
}
