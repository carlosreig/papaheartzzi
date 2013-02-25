var map_matrix1=[
[0,1,1,1,2,3,3,1,1,1,4,5,6,6,5,5,5,5,5,7,8,9,10,11,12,13,14],
[0,1,3,3,15,3,3,3,3,3,4,16,17,18,16,16,19,20,21,16,16,9,22,23,24,25,14],
[0,1,3,26,27,28,27,29,30,31,32,16,16,16,16,16,16,33,34,16,16,9,9,35,35,35,14],
[0,1,3,36,37,38,38,39,3,3,4,9,9,9,9,9,16,40,41,16,16,16,9,9,42,43,44],
[0,1,3,45,46,47,48,49,3,3,4,9,50,51,52,53,16,16,16,16,54,16,55,9,56,56,57],
[0,1,3,3,3,3,3,3,3,58,59,9,60,61,62,60,60,63,9,64,65,16,16,16,56,56,66],
[0,35,9,9,9,9,9,9,9,9,9,9,60,67,68,60,60,60,9,9,9,9,9,9,56,56,69],
[0,70,9,5,71,5,72,5,73,5,5,74,60,60,60,60,75,76,77,78,78,78,79,9,56,56,69],
[0,35,9,16,16,16,16,16,16,16,16,80,16,19,78,78,78,81,82,83,84,83,85,9,56,56,66],
[0,70,9,16,86,87,88,89,90,91,16,16,16,16,83,82,83,82,83,19,92,82,83,82,56,56,93],
[0,70,9,16,94,95,96,97,98,16,99,16,55,16,9,83,82,100,82,83,82,101,82,9,56,56,102],
[0,35,9,16,16,16,16,16,16,16,16,16,16,16,9,103,104,105,83,82,106,107,108,9,109,109,57],
[0,35,9,9,9,9,9,16,16,9,9,9,9,9,9,9,9,9,9,110,9,9,9,9,9,9,111],
[0,70,9,5,112,5,5,113,114,114,5,5,115,5,116,5,117,5,5,118,119,120,121,5,5,122,122],
[0,70,9,5,123,5,5,124,125,126,126,5,5,5,5,5,5,5,5,127,128,129,130,124,5,5,5],
[0,35,9,16,131,16,16,132,16,16,16,16,16,16,16,16,16,16,16,16,133,134,135,132,16,16,16],
[0,70,9,16,16,16,16,16,16,16,136,16,137,16,16,138,16,16,19,16,16,139,16,16,16,16,16],
[0,35,9,16,16,140,141,16,55,16,16,16,142,143,144,145,16,16,16,16,16,16,16,91,16,55,146],
[0,35,147,148,149,150,151,147,148,149,150,151,147,148,149,150,151,147,148,149,150,151,147,149,149,150,151],
[0,70,35,70,70,35,70,70,35,70,70,35,35,70,70,35,35,70,35,70,35,70,35,35,70,35,35]];
var collisions1=[[1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,],
[1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,],
[1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,],
[1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,],
[1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,],
[1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,],
[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,],
[1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,],
[1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,],
[1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,],
[1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,],
[1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,],
[1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]];
var map_matrix2=[
[0,1,2,3,3,4,5,6,6,6,6,6,5,7,7,7,5,7,6,6,6,8,9,6,10,11,12],
[4,3,3,3,3,0,6,6,13,13,13,6,6,7,5,7,7,5,6,14,15,16,17,18,19,6,20],
[21,3,4,3,2,3,6,13,13,22,13,13,6,6,6,6,6,6,6,23,24,25,26,27,28,6,20],
[0,3,0,4,0,3,13,29,30,31,32,13,13,13,13,13,13,13,13,33,34,35,36,37,38,6,20],
[4,3,3,3,3,3,6,13,39,40,41,13,13,6,42,43,44,45,46,47,48,49,50,51,52,6,20],
[0,1,2,3,3,2,6,13,13,53,13,13,6,6,3,3,3,3,54,55,56,57,58,59,60,6,20],
[3,3,3,3,3,4,6,6,13,13,13,6,6,61,3,62,63,3,64,65,66,67,68,69,70,6,20],
[3,3,3,3,3,0,2,6,6,13,6,6,4,71,72,3,73,3,74,75,76,77,78,79,80,6,20],
[2,0,4,2,0,81,4,81,81,81,2,61,81,61,82,3,83,3,84,85,3,86,6,6,6,6,20],
[7,5,7,5,7,81,6,81,61,81,6,61,81,61,87,3,88,89,90,91,3,92,7,5,7,7,20],
[93,94,95,96,97,81,98,98,98,98,98,98,81,61,99,3,100,89,3,3,3,101,7,7,5,7,20],
[102,103,104,105,106,81,98,98,98,98,98,98,98,61,107,3,3,3,108,109,3,110,111,7,7,7,20],
[112,113,114,115,116,81,98,98,98,98,98,98,98,61,117,118,119,120,121,122,3,3,123,124,7,5,20],
[7,5,7,5,5,81,81,61,81,61,98,98,98,61,3,3,3,3,3,3,3,3,3,125,7,7,20],
[6,6,6,6,6,61,81,61,81,61,81,61,81,61,126,127,128,129,130,131,132,3,3,133,7,5,20],
[81,61,81,61,6,134,135,136,137,138,139,6,81,6,5,140,141,142,143,144,145,146,147,148,7,7,20],
[81,61,81,61,81,61,81,61,81,61,81,61,81,61,149,150,3,3,3,3,3,3,151,152,5,7,20],
[6,6,6,6,81,61,0,2,61,4,0,61,81,61,153,3,3,3,154,155,3,3,3,156,7,5,20],
[7,7,5,6,6,6,6,6,6,6,6,6,6,6,157,158,159,160,161,162,163,164,165,166,7,7,20],
[7,5,7,5,7,5,7,7,5,5,7,7,5,7,7,5,5,7,7,5,5,7,7,7,5,7,20]];
var collisions2=[
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
var map_matrix3=[
[0,1,2,2,1,1,2,1,1,2,1,3,3,3,3,3,3,3,1,2,1,1,1,2,2,1,1,1,3,1,1,3,1,2,1,3,3,1,1,2,1,2,2,1,1,2,1,1,2,1,1,2,1,0],
[0,1,4,5,6,7,8,8,8,8,8,9,9,10,11,9,9,9,8,12,12,12,12,12,12,12,12,12,13,14,15,13,16,17,18,13,13,19,20,20,20,20,20,20,20,20,20,20,20,20,20,19,1,0],
[0,2,4,21,22,23,24,9,9,25,9,25,9,26,27,28,9,9,13,13,29,30,13,13,13,13,13,13,13,31,32,13,13,33,34,13,13,19,35,36,36,36,35,37,38,39,40,35,37,41,41,19,1,0],
[0,2,4,42,43,44,45,9,9,46,9,46,9,47,9,9,9,9,8,13,48,49,50,13,13,13,13,13,13,13,13,13,13,13,13,13,13,19,39,37,35,38,51,52,53,35,37,39,51,35,38,19,2,0],
[0,1,4,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,13,54,55,13,13,56,57,0,58,59,13,13,58,59,13,13,58,13,60,60,60,60,35,61,62,60,60,19,35,63,64,39,19,2,0],
[0,1,4,9,9,65,9,9,9,8,8,13,8,8,8,13,13,13,50,13,13,13,13,13,66,67,0,68,69,13,70,68,69,70,13,68,13,13,13,13,13,13,13,13,13,13,19,37,71,72,37,19,1,0],
[0,1,4,9,9,10,11,73,9,74,13,13,13,75,76,77,78,13,13,13,13,79,80,13,13,81,0,82,83,58,84,82,83,85,59,82,16,13,86,87,13,88,13,86,89,13,19,38,39,51,35,19,1,0],
[0,2,4,9,9,26,27,9,9,74,90,91,13,13,92,93,94,13,86,13,13,95,96,13,97,98,0,99,100,99,100,99,100,99,100,101,13,13,102,103,13,13,13,102,104,13,19,52,53,37,38,19,2,0],
[0,1,4,9,65,9,9,9,9,74,105,106,13,13,13,13,13,13,102,107,13,13,13,50,108,109,0,110,111,112,112,110,113,114,88,115,116,13,117,118,119,120,121,122,123,124,19,35,51,125,0,19,2,0],
[0,1,12,13,12,12,12,12,12,12,13,13,13,13,13,13,12,12,0,12,12,12,12,12,12,12,12,110,126,127,128,110,13,13,13,13,13,13,13,13,129,130,13,13,13,13,19,51,38,35,40,19,1,0],
[0,3,13,13,50,13,13,131,132,107,13,13,50,50,50,13,13,13,0,13,133,13,13,133,13,13,13,134,126,126,126,126,13,13,135,136,13,13,13,13,13,13,13,137,138,13,19,40,37,51,38,19,1,0],
[0,3,13,13,13,13,13,13,13,13,13,13,13,13,139,140,13,13,13,13,13,13,13,13,13,13,13,134,126,126,126,141,110,142,143,142,143,142,143,142,143,13,13,144,145,13,19,60,125,60,60,19,2,0],
[0,1,8,8,8,8,8,13,12,12,12,12,13,0,146,147,13,13,0,13,148,13,149,13,150,151,0,110,152,126,126,126,110,153,154,153,154,153,154,153,154,13,13,13,155,13,19,13,13,13,13,19,1,0],
[0,1,0,156,157,157,13,13,13,13,158,13,13,0,159,13,13,86,0,160,161,160,13,13,13,162,0,110,163,126,164,110,110,110,165,166,167,168,110,110,110,169,13,13,13,13,60,60,60,13,60,60,1,0],
[0,2,0,170,157,171,157,13,13,172,173,13,174,0,13,13,13,102,0,175,160,176,13,13,13,177,0,110,152,126,126,178,110,179,126,126,126,126,180,181,110,182,183,13,184,185,186,86,187,13,187,188,1,0],
[0,1,0,189,157,157,157,13,190,191,13,13,192,0,193,193,13,194,195,196,193,197,13,198,13,198,0,110,199,199,126,126,200,126,126,126,126,126,126,126,110,186,13,13,201,202,13,102,88,13,13,203,2,0],
[0,1,0,13,13,13,13,204,205,206,13,13,2,0,207,207,207,207,207,207,207,197,13,208,198,208,0,110,163,126,126,126,126,126,199,199,126,126,209,210,110,13,13,13,13,13,13,13,13,13,13,211,2,0],
[0,1,0,212,213,13,13,13,13,13,13,177,214,0,207,207,207,207,207,207,207,197,198,215,216,217,0,218,218,218,219,220,220,126,209,210,126,126,221,222,110,13,107,13,16,13,223,224,13,186,87,225,1,0],
[0,1,0,226,227,13,13,214,214,2,2,214,2,0,228,229,230,231,232,13,13,0,208,233,234,235,0,3,3,236,237,237,218,218,218,218,218,218,218,218,218,118,119,120,121,122,123,117,13,13,103,238,2,0],
[0,1,12,12,12,13,13,12,12,12,12,239,239,239,239,239,239,239,239,13,13,0,12,12,12,12,12,1,2,3,13,13,3,1,2,1,2,2,1,1,2,2,1,1,1,2,1,3,13,13,240,241,1,0],
[0,3,3,3,242,243,243,3,3,3,244,245,246,246,245,245,245,245,245,247,248,239,249,250,251,252,253,254,255,256,243,243,257,2,3,3,3,3,3,2,1,1,1,2,1,3,3,3,258,259,3,3,260,0],
[0,3,243,243,261,243,243,243,243,243,244,262,263,264,262,262,265,266,267,262,262,239,268,269,270,271,253,257,243,243,243,243,254,3,3,272,272,272,3,3,1,2,1,1,2,3,273,274,275,276,277,278,3,0],
[0,3,243,279,280,281,280,282,283,284,285,262,262,262,262,262,262,286,287,262,262,239,239,2,2,2,253,288,243,257,243,256,243,3,272,272,289,272,272,3,3,3,3,3,3,3,290,291,292,293,294,295,3,0],
[0,3,243,296,297,298,298,299,243,243,244,239,239,239,239,239,262,300,301,262,262,262,239,239,302,303,304,254,243,254,257,254,243,272,305,306,307,308,272,272,272,272,272,272,272,272,309,310,311,312,313,314,3,0],
[0,3,243,315,316,317,318,319,243,243,244,239,320,321,322,323,262,262,262,262,324,262,325,239,326,326,327,257,243,243,243,243,243,3,272,328,329,330,272,272,3,331,332,333,334,335,336,337,338,339,340,341,3,0],
[0,3,243,243,243,243,243,243,243,342,343,239,344,345,346,344,344,347,239,348,349,262,262,262,326,326,350,254,255,256,243,243,256,3,272,272,351,272,272,3,3,243,243,243,243,352,353,354,355,356,357,358,3,0],
[0,2,239,239,239,239,239,239,239,239,239,239,344,359,360,344,344,344,239,239,239,239,239,239,326,326,361,243,243,243,243,243,257,3,3,272,272,272,3,3,362,243,363,364,243,365,366,367,368,369,370,371,3,0],
[0,1,239,245,372,245,373,245,374,245,245,375,344,344,344,344,376,377,378,379,379,379,380,239,326,326,361,243,243,243,243,243,254,256,3,3,272,3,3,257,381,382,243,383,243,384,385,386,387,388,389,390,3,0],
[0,2,239,262,262,262,262,262,262,262,262,391,262,265,379,379,379,392,393,394,395,394,396,239,326,326,350,256,254,257,256,254,362,257,397,362,397,256,362,397,362,398,243,399,243,400,401,243,402,3,3,3,3,0],
[0,1,239,262,403,404,405,406,407,408,262,262,262,262,394,393,394,393,394,265,409,393,394,393,326,326,410,1,2,1,2,1,362,3,397,362,397,3,362,397,362,411,243,412,413,414,415,243,416,1,2,1,1,0],
[0,1,239,262,417,418,419,420,421,262,422,262,325,262,239,394,393,423,393,394,393,424,393,239,326,326,425,426,427,428,429,430,362,431,431,431,431,431,431,397,362,432,243,433,413,243,243,243,434,1,1,2,1,0],
[0,2,239,262,262,262,262,262,262,262,262,262,262,262,239,435,436,437,394,393,438,439,440,239,232,232,327,441,442,443,444,445,362,431,431,431,431,431,431,431,362,446,243,243,243,447,448,243,449,450,1,1,1,0],
[0,2,239,239,239,239,239,262,262,239,239,239,239,239,239,239,239,239,239,451,239,239,239,239,239,239,452,453,454,455,456,457,362,431,431,431,431,431,431,431,362,458,459,460,461,462,463,243,243,464,465,1,2,0],
[0,1,239,245,466,467,245,468,469,469,245,245,470,245,471,245,472,245,245,473,474,475,476,245,245,477,477,1,2,1,2,2,362,397,362,397,362,431,431,431,362,243,243,243,243,243,243,243,243,243,478,1,1,0],
[0,1,239,245,479,245,245,480,481,482,482,245,245,245,245,245,245,245,245,483,484,485,486,480,245,245,245,3,3,3,3,3,362,397,362,397,362,397,362,397,362,487,488,489,490,491,492,493,243,243,494,1,2,0],
[0,2,239,262,495,262,262,496,262,262,262,262,262,262,262,262,262,262,262,262,497,498,499,496,262,262,262,397,362,397,362,3,500,501,502,503,504,505,3,397,3,2,506,507,508,509,510,511,512,513,514,1,1,0],
[0,1,239,262,262,262,262,262,262,262,515,262,516,262,262,517,262,262,265,262,262,518,262,262,262,262,262,397,362,397,362,397,362,397,362,397,362,397,362,397,362,519,520,243,243,243,243,243,243,521,522,2,1,0],
[0,2,239,262,262,523,524,262,325,262,262,262,525,526,527,528,262,262,262,262,262,262,262,408,262,325,529,3,3,3,3,397,362,254,256,362,257,254,362,397,362,530,243,243,243,531,532,243,243,243,533,1,2,0],
[0,2,534,535,536,537,538,534,535,536,537,538,534,535,536,537,538,534,535,536,537,538,534,536,536,537,538,1,1,2,3,3,3,3,3,3,3,3,3,3,3,539,540,541,542,543,544,545,546,547,548,1,1,0],
[0,1,2,1,1,2,1,1,2,1,1,2,2,1,1,2,2,1,2,1,2,1,2,2,1,2,2,1,2,1,2,1,2,1,1,2,2,1,1,2,1,1,2,2,1,1,2,2,1,1,1,2,1,0]];
var collisions3=[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1],
[1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1],
[1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1],
[1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1],
[1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1],
[1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1],
[1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1],
[1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1],
[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1],
[1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1],
[1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1],
[1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1],
[1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
[1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1],
[1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1],
[1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1],
[1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1],
[1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1],
[1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1],
[1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
[1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1],
[1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1],
[1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1],
[1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1],
[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1],
[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1],
[1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1],
[1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
[1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1],
[1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];