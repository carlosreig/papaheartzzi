import sys;
import Image;
import numpy;

class TileListElement:
	def __init__(self, position, averageColor, positionInList):
		self.averageColor = averageColor;
		self.tilePosition = position
		self.itemPosition = positionInList;
	
	def isEqual (self, color):
		if color[0] == self.averageColor[0] and color[1] == self.averageColor[2] and color[2] == self.averageColor[2]:
			return True;
		else:
			return False;

class TileList:
	def __init__(self):
		self.list = []
	
	def hasColor(self, color):
		for i in self.list:
			if i.isEqual(color):
				return True;
		return False;
	
	def getPositionOfTile(self, color):
		for i in self.list:
			if i.isEqual(color):
				return i.itemPosition;
	
	def addElement(self, position, color):
		newElement = TileListElement(position, color, len(self.list));
		self.list.append(newElement);
		
		

DEFAULT_OUTPUT_IMAGE = 'tileMap.png'
DEFAULT_TILE_SIZE = 16

if len(sys.argv) < 2:
	sys.exit("Use: readMapImage.py fullMap.png [tileSize] [outputFile]" + "\n");

if len(sys.argv) > 2:
	tileSize = int(sys.argv[2]);
else:
	tileSize = int(DEFAULT_TILE_SIZE);

if len(sys.argv) > 3:
	outputFile = sys.argv[3];
else:
	outputFile = DEFAULT_OUTPUT_IMAGE;

try:
	im = Image.open(sys.argv[1]);
except IOError:
	sys.exit("The image " + sys.argv[1] + " is not found in the system.");

if im.size[0] != im.size[1]:
	sys.exit("The number of pixels of width is not the same as the height. The map must be square" + "\n");

numberOfTiles = int(im.size[0] / tileSize);

tileList = TileList();

tileMapMatrix = numpy.empty((numberOfTiles, numberOfTiles));
pixels = im.load();
for row in range(numberOfTiles):
	for col in range(numberOfTiles):
		averageColor = (0, 0, 0);
		
		for i in range(tileSize):
			for j in range(tileSize):
				pixel = pixels[row * tileSize + i, col * tileSize + j];
				averageColor = tuple(sum(x) for x in zip(averageColor, pixel));
		averageColor = tuple(x / (tileSize * tileSize) for x in averageColor);
		
		if not tileList.hasColor(averageColor):
			tileList.addElement((row, col), averageColor);
			
		tileMapMatrix[row][col] = tileList.getPositionOfTile(averageColor);

outputImage = Image.new("RGB", (len(tileList.list) * tileSize, tileSize), "black");

for item in tileList.list:
	for i in range(tileSize):
		for j in range(tileSize):
			outputImage.putpixel((item.itemPosition * tileSize + i, j), pixels[item.tilePosition[0] * tileSize + i, item.tilePosition[1] * tileSize + j]);
			
outputImage.save(outputFile);

print "[";
for i in range(numberOfTiles):
	print "[",;
	
	for j in range(numberOfTiles):
		if j != numberOfTiles - 1:
			print str(int(tileMapMatrix[i][j])) + ", ",;
		else:
			print int(tileMapMatrix[i][j]),;
	if i != numberOfTiles - 1:
		print "], ";
	else:
		print "]",;
print "]";
