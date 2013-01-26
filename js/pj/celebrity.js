function Celebrity(spriteWidth, spriteHeight) {
	region = Math.floor(Math.random()*4);
	image = 'images/celebrity.png';
	var pj = new Pj(region, spriteWidth, spriteHeight, image);
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

	document.addEventListener('keydown', function(e) {
		switch(e.keyCode)
		{
			case 83: //down
				if (isPositionAvailable(pj.getX(), (pj.getY()+speed), true)) {
		        		pj.setY((pj.getY() + speed));        		
		    		}
		    		
		    		pj.sprite.frame = forwardFrames;
	    		break;
		    	case 65: //left
	   		    if (isPositionAvailable((pj.getX()-speed), pj.getY(), true)) {
	   		     	pj.setX((pj.getX() - speed));
	   		    }
	   		    
	   		    pj.sprite.frame = forwardFrames;
	   		    
	   		    break;
	   		case 68://right
	   		    if (isPositionAvailable((pj.getX()+speed), pj.getY(), true)) {
	   			    pj.setX((pj.getX() + speed));
	   			}
	   			pj.sprite.frame = forwardFrames;
	   			break;
	   		case 87://top
	   		    if (isPositionAvailable(pj.getX(), (pj.getY()-speed), true)) {
	   		    	pj.setY((pj.getY() - speed));
	   		    }
				pj.sprite.frame = backwardFrames;
	   		    break;
	    }
    });
}
