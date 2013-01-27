import sys;
import Image;
import numpy;
import md5;

class TileListElement:
	def __init__(self, position, md5Hash, positionInList):
		self.md5Hash = md5Hash;
		self.tilePosition = position
		self.itemPosition = positionInList;
	
	def isEqual (self, md5Hash):
		if self.md5Hash == md5Hash:
			return True;
		else:
			return False;

class TileList:
	def __init__(self):
		self.list = []
	
	def hasTile(self, md5Hash):
		for i in self.list:
			if i.isEqual(md5Hash):
				return True;
		return False;
	
	def getPositionOfTile(self, md5Hash):
		for i in self.list:
			if i.isEqual(md5Hash):
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

numberOfTilesHorizontal = int(im.size[0] / tileSize);
numberOfTilesVertical = int(im.size[1] / tileSize);

tileList = TileList();

tileMapMatrix = numpy.empty((numberOfTilesVertical, numberOfTilesHorizontal));

pixels = im.load();

for row in range(numberOfTilesVertical):
	for col in range(numberOfTilesHorizontal):
		md5Hasher = md5.new();
		
		for i in range(tileSize):
			for j in range(tileSize):
				pixel = pixels[col * tileSize + j, row * tileSize + i];
				tuple(md5Hasher.update(str(x)) for x in pixel);
		
		md5Hash = md5Hasher.digest();
		if not tileList.hasTile(md5Hash):
			tileList.addElement((row, col), md5Hash);
			
		tileMapMatrix[row][col] = tileList.getPositionOfTile(md5Hash);

outputImage = Image.new("RGB", (len(tileList.list) * tileSize, tileSize), "black");

for item in tileList.list:
	for i in range(tileSize):
		for j in range(tileSize):
			outputCoordinates = (item.itemPosition * tileSize + j, i);
			inputCoordinates = (item.tilePosition[1] * tileSize + j, item.tilePosition[0] * tileSize + i);
			outputImage.putpixel(outputCoordinates, pixels[inputCoordinates]);
			
outputImage.save(outputFile);

print "var map_matrix = [";
for i in range(numberOfTilesVertical):
	print "[",;
	
	for j in range(numberOfTilesHorizontal):
		if j != numberOfTilesHorizontal - 1:
			print str(int(tileMapMatrix[i][j])) + ", ",;
		else:
			print int(tileMapMatrix[i][j]),;
	if i != numberOfTilesVertical - 1:
		print "], ";
	else:
		print "]",;
print "];";
