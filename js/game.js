// Global variables
var width = 800;
var height = 600;
var tile_size = 10;
// TODO: FIX FOR LOWER SPEEDS!!!
var speed = 20;

// Calculated variables
var horizontal_tiles =  width / tile_size;
var vertical_tiles = height / tile_size;

// Set up new key events
enchant.ENV.KEY_BIND_TABLE[32] = 'o';
enchant.Event.S_BUTTON_DOWN = 'obuttondown';
console.log(enchant.ENV.KEY_BIND_TABLE);

// Set to true to enable debugging
var debug = true;
