var map_matrix = [
[ 0,  1,  2,  3,  3,  4,  5,  6,  6,  6,  6,  6,  5,  7,  7,  7,  5,  7,  6,  6,  6,  8,  9,  6,  10,  11,  12 ], 
[ 4,  3,  3,  3,  3,  0,  6,  6,  13,  13,  13,  6,  6,  7,  5,  7,  7,  5,  6,  14,  15,  16,  17,  18,  19,  6,  20 ], 
[ 21,  3,  4,  3,  2,  3,  6,  13,  13,  22,  13,  13,  6,  6,  6,  6,  6,  6,  6,  23,  24,  25,  26,  27,  28,  6,  20 ], 
[ 0,  3,  0,  4,  0,  3,  13,  29,  30,  31,  32,  13,  13,  13,  13,  13,  13,  13,  13,  33,  34,  35,  36,  37,  38,  6,  20 ], 
[ 4,  3,  3,  3,  3,  3,  6,  13,  39,  40,  41,  13,  13,  6,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  6,  20 ], 
[ 0,  1,  2,  3,  3,  2,  6,  13,  13,  53,  13,  13,  6,  6,  3,  3,  3,  3,  54,  55,  56,  57,  58,  59,  60,  6,  20 ], 
[ 3,  3,  3,  3,  3,  4,  6,  6,  13,  13,  13,  6,  6,  61,  3,  62,  63,  3,  64,  65,  66,  67,  68,  69,  70,  6,  20 ], 
[ 3,  3,  3,  3,  3,  0,  2,  6,  6,  13,  6,  6,  4,  71,  72,  3,  73,  3,  74,  75,  76,  77,  78,  79,  80,  6,  20 ], 
[ 2,  0,  4,  2,  0,  81,  4,  81,  81,  81,  2,  61,  81,  61,  82,  3,  83,  3,  84,  85,  3,  86,  6,  6,  6,  6,  20 ], 
[ 7,  5,  7,  5,  7,  81,  6,  81,  61,  81,  6,  61,  81,  61,  87,  3,  88,  89,  90,  91,  3,  92,  7,  5,  7,  7,  20 ], 
[ 93,  94,  95,  96,  97,  81,  98,  98,  98,  98,  98,  98,  81,  61,  99,  3,  100,  89,  3,  3,  3,  101,  7,  7,  5,  7,  20 ], 
[ 102,  103,  104,  105,  106,  81,  98,  98,  98,  98,  98,  98,  98,  61,  107,  3,  3,  3,  108,  109,  3,  110,  111,  7,  7,  7,  20 ], 
[ 112,  113,  114,  115,  116,  81,  98,  98,  98,  98,  98,  98,  98,  61,  117,  118,  119,  120,  121,  122,  3,  3,  123,  124,  7,  5,  20 ], 
[ 7,  5,  7,  5,  5,  81,  81,  61,  81,  61,  98,  98,  98,  61,  3,  3,  3,  3,  3,  3,  3,  3,  3,  125,  7,  7,  20 ], 
[ 6,  6,  6,  6,  6,  61,  81,  61,  81,  61,  81,  61,  81,  61,  126,  127,  128,  129,  130,  131,  132,  3,  3,  133,  7,  5,  20 ], 
[ 81,  61,  81,  61,  6,  134,  135,  136,  137,  138,  139,  6,  81,  6,  5,  140,  141,  142,  143,  144,  145,  146,  147,  148,  7,  7,  20 ], 
[ 81,  61,  81,  61,  81,  61,  81,  61,  81,  61,  81,  61,  81,  61,  149,  150,  3,  3,  3,  3,  3,  3,  151,  152,  5,  7,  20 ], 
[ 6,  6,  6,  6,  81,  61,  0,  2,  61,  4,  0,  61,  81,  61,  153,  3,  3,  3,  154,  155,  3,  3,  3,  156,  7,  5,  20 ], 
[ 7,  7,  5,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  6,  157,  158,  159,  160,  161,  162,  163,  164,  165,  166,  7,  7,  20 ], 
[ 7,  5,  7,  5,  7,  5,  7,  7,  5,  5,  7,  7,  5,  7,  7,  5,  5,  7,  7,  5,  5,  7,  7,  7,  5,  7,  20 ] ];
var collisions = [
[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1],
[1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1],
[1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1],
[1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
[1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1],
[1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1],
[0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1],
[0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1],
[1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1],
[1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1],
[0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1],
[1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
