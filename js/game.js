// Global variables
var width = 810;
var height = 600;
var tileSize = 30;
var fps = 30;

// TODO: FIX FOR LOWER SPEEDS!!!
var speed = tileSize;

// Calculated variables
var horizontalTiles =  width / tileSize;
var verticalTiles = height / tileSize;

// Set to true to enable debugging
var debug = false;

// Enable for background music
var isMusicEnabled = true;

// Game settings
var pjsList = [];
var timer = 0;
var frameCount = 0;
var score = 0;
var timerOut = 30;

enchant.ENV.KEY_BIND_TABLE['32'] = 'a';

var directions = ['left', 'right', 'up', 'down'];