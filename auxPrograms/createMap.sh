#!/bin/bash
if [ $# -lt 3 ]; then
	echo 'Use: createMap.sh mapImage.png maskImage.png tileSize [outputTileImage]';
	exit;
fi

python readMapImage.py $1 $3 > ../js/mapMatrix.js
python readCollisionImage.py $1 $3 >> ../js/mapMatrix.js
mv tileMap.png ../images/

echo "Hecho\n"
