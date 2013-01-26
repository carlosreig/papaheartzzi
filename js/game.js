// Global variables
var width = 800;
var height = 600;
var tileSize = 20;

// TODO: FIX FOR LOWER SPEEDS!!!
var speed = 20;

// Calculated variables
var horizontalTiles = width / tileSize;
var verticalTiles = height / tileSize;

// World map and collisionsisions map
var map_matrix = [];
var collisions = [];
for (var i = 0; i < verticalTiles; i++) {
    var row = [];
    var blocks = [];
    for (var y = 0; y < horizontalTiles; y++) {
        var rand = Math.floor(Math.random()*4);
        row[y] = rand;
        if (rand != 1) {
            blocks[y] = 0;
        }
        else {
            blocks[y] = 2;
        }
    }
    map_matrix[i] = row;
    collisions[i] = blocks;
}

// Set to true to enable debugging
var debug = true;

// Enable for background music
var isMusicEnabled = false;