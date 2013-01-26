import sys;
import Image;
import numpy;

DEFAULT_OUTPUT_IMAGE = 'tileMap.gif'
DEFAULT_TILE_SIZE = 16

if len(sys.argv) < 2:
	sys.exit("Use: readMapImage.py fullMap.png [tileSize] [outputFile]" + "\n");

if sys.argv > 2:
	tileSize = sys.argv[2];
else
	tileSize = DEFAULT_TILE_SIZE;

if sys.argv > 3:
	outputFile = sys.argv[3];
else
	tileSize = DEFAULT_OUTPUT_IMAGE;

try:
	im = Image.open(sys.argv[1]);
except IOError:
	sys.exit("The image " + sys.argv[1] + " is not found in the system.");
