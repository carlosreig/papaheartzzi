function Celebrity() {
	region = Math.floor(Math.random()*4);
	image = 'images/celebrity.png';
	var pj = new Pj(region, image);
	pj.setId('celebrity');

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
	    		updateHeartSound();
	   		    pj.sprite.frame = pj.forwardFrames;
	    		break;
	    	// A key
	    	case 65:
	   		    if (pj.isMoveAllowed('left', speed)) {
	   		     	pj.substractX(speed);
	   		    }
	    		updateHeartSound();
	   		    pj.sprite.frame = pj.forwardFrames;
	   		    break;
	   		// D key
	   		case 68:
	   		    if (pj.isMoveAllowed('right', speed)) {
	   			    pj.addX(speed);
	   			}
	    		updateHeartSound();
	   		    pj.sprite.frame = pj.forwardFrames;
	   		    break;
	   		// W key
	   		case 87:
	   		    if (pj.isMoveAllowed('up', speed)) {
	   		    	pj.substractY(speed);
	   		    }
	    		updateHeartSound();
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
    
}
