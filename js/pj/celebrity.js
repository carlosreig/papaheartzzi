function Celebrity(spriteWidth, spriteHeight) {
	region = Math.floor(Math.random()*4);
	image = 'images/celebrity.png';
	var pj = new Pj(region, spriteWidth, spriteHeight, image);
	pj.sprite.frame = [0, 1, 2, 3, 4];

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
			case 83: 
				if (isPositionAvailable(pj.getX(), (pj.getY()+speed), true)) {
	        		pj.setY((pj.getY() + speed));
	    		}
	    		break;
	    	case 65:
	   		    if (isPositionAvailable((pj.getX()-speed), pj.getY(), true)) {
	   		     	pj.setX((pj.getX() - speed));
	   		    }
	   		    break;
	   		case 68:
	   		    if (isPositionAvailable((pj.getX()+speed), pj.getY(), true)) {
	   			    pj.setX((pj.getX() + speed));
	   			}
	   			break;
	   		case 87:
	   		    if (isPositionAvailable(pj.getX(), (pj.getY()-speed), true)) {
	   		    	pj.setY((pj.getY() - speed));
	   		    }
	   		    break;
	    }
    });
}
