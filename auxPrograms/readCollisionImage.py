import Image;
import numpy;
import sys;

DEFAULT_TILE_SIZE = 16

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

if im.size[0] != im.size[1]:
	sys.exit("The number of pixels of width is not the same as the height. The map must be square" + "\n");

numberOfTilesHorizontal = int(im.size[0] / tileSize);
numberOfTilesVertical = int(im.size[1] / tileSize);
colisionableMatrix = numpy.empty((numberOfTilesHorizontal, numberOfTilesHorizontal));

pixels = im.load();
for z in range(numberOfTilesHorizontal):
	for i in range(numberOfTilesVertical):
		average = 0;
		for j in range(tileSize):
			for k in range(tileSize):
				pixel = pixels[z * tileSize + j, i * tileSize + k];
				average += (pixel[0] + pixel[1] + pixel[2]) / 3;
	
		average = average / (tileSize * tileSize);
		colisionableMatrix[z][i] = (1, 0) [average > 128];

print "var collisions = [";
for i in range(numberOfTilesHorizontal):
	print "[",;
	
	for j in range(numberOfTilesVertical):
		if j != numberOfTilesVertical - 1:
			print str(int(colisionableMatrix[i][j])) + ", ",;
		else:
			print int(colisionableMatrix[i][j]),;
	if i != numberOfTilesHorizontal - 1:
		print "],",;
	else:
		print "]",;
print "];";
