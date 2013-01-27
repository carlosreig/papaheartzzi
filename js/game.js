// Global variables

var width = 810;
var height = 600;
var tileSize = 15;

// TODO: FIX FOR LOWER SPEEDS!!!
var speed = 15;

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
