function Celebrity(spriteWidth, spriteHeight) {
	region = Math.floor(Math.random()*4);
	image = 'misc/walker2.gif';
	var pj = new Pj(region, spriteWidth, spriteHeight, image);
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
	    		break;
	    	// A key
	    	case 65:
	   		    if (pj.isMoveAllowed('left', speed)) {
	   		     	pj.substractX(speed);
	   		    }
	   		    break;
	   		// D key
	   		case 68:
	   		    if (pj.isMoveAllowed('right', speed)) {
	   			    pj.addX(speed);
	   			}
	   			break;
	   		// W key
	   		case 87:
	   		    if (pj.isMoveAllowed('up', speed)) {
	   		    	pj.substractY(speed);
	   		    }
	   		    break;
	    }
    });
}