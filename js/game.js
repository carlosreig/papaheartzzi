// Global variables
var width = 150;
var height = 150;
var tileSize = 10;
var fps = 30;
// TODO: FIX FOR LOWER SPEEDS!!!
var speed = 10;

// Calculated variables
var horizontalTiles =  width / tileSize;
var verticalTiles = height / tileSize;

// Set to true to enable debugging
var debug = false;

// Enable for background music
var isMusicEnabled = true;

// List of sprites
var pjsList = [];

enchant.ENV.KEY_BIND_TABLE['32'] = 'a';