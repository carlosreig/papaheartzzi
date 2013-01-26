// Global variables
var width = 800;
var height = 600;
var tile_size = 20;

// TODO: FIX FOR LOWER SPEEDS!!!
var speed = 20;

// Calculated variables
var horizontal_tiles = width / tile_size;
var vertical_tiles = height / tile_size;

// World map and collisions map
var map_matrix = [];
var coll = [];
for (var i = 0; i < vertical_tiles; i++) {
    var row = [];
    var blocks = [];
    for (var y = 0; y < horizontal_tiles; y++) {
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
    coll[i] = blocks;
}

// Set up new key events
enchant.ENV.KEY_BIND_TABLE[32] = 'o';
enchant.Event.S_BUTTON_DOWN = 'obuttondown';
console.log(enchant.ENV.KEY_BIND_TABLE);

// Set to true to enable debugging
var debug = true;

// Enable for background music
var isMusicEnabled = false;