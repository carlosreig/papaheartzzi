// Global variables

var width = 800;
var height = 600;
var tileSize = 20;
var fps = 30;

// TODO: FIX FOR LOWER SPEEDS!!!
var speed = 20;

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
