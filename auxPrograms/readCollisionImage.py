import Image;
import numpy;
import sys;

DEFAULT_TILE_SIZE = 15

if len(sys.argv) < 2:
	sys.exit("Use: readCollisionImage.py imagecolision.png [tileSize]" + "\n");
	
try:
	im = Image.open(sys.argv[1]);
except IOError:
	sys.exit("The image " + sys.argv[1] + " is not found in the system.");
	
if len(sys.argv) > 2:
	tileSize = int(sys.argv[2]);
else:
	tileSize = DEFAULT_TILE_SIZE;

numberOfTilesHorizontal = int(im.size[0] / tileSize);
numberOfTilesVertical = int(im.size[1] / tileSize);
colisionableMatrix = numpy.empty((numberOfTilesVertical, numberOfTilesHorizontal));

pixels = im.load();
for row in range(numberOfTilesVertical):
	for col in range(numberOfTilesHorizontal):
		average = 0;
		for i in range(tileSize):
			for j in range(tileSize):
				pixel = pixels[col * tileSize + j, row * tileSize + i];
				average += (pixel[0] + pixel[1] + pixel[2]) / 3;
				
		average = average / (tileSize * tileSize);
		if average > 128:
			colisionableMatrix[row][col] = 1;
		else:
			colisionableMatrix[row][col] = 0;

print "var collisions = [";
for i in range(numberOfTilesVertical):
	print "[",;
	
	for j in range(numberOfTilesHorizontal):
		if j != numberOfTilesHorizontal - 1:
			print str(int(colisionableMatrix[i][j])) + ", ",;
		else:
			print int(colisionableMatrix[i][j]),;
	if i != numberOfTilesVertical - 1:
		print "],";
	else:
		print "]",;
print "];";
