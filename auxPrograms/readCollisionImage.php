<?php
define('DEFAULT_TILE_SIZE', 16);

if ($argc > 1)
	die('Use: readCollisionImage.php imagecolision.png [tileSize]');

$tileSize = (int) ($argc > 2) ? $argv[2] : DEFAULT_TILE_SIZE;

$im = new Imagick();
$im->readImage($argv[1]);

$iterator = $im->getPixelIterator();
$imageSize = $im->getSize();

foreach ($rows as $row => $rowPixels)
{
	foreach ($pixels as $column => $pixel)
	{
		
	}
}
