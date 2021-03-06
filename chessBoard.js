
//variable grid size 

//tries
//just x first - odd rows start w space, even with #

var size = 8;
var chess = "";

  for (var x = 0; x < size; x++) {
    if (x % 2 == 0)
      chess += "0";
    else
      chess += "#";
  }
  
console.log(chess);

/*returns
 0#0#0#0#

has extra space bc of console.log adds it
*/

//ok now 2d  - using 0's instead of spaces bc it's easier for me to read

var size = 8;
var chess = "";
	for(var y = 0; y < size; y++) {
	  for (var x = 0; x < size; x++) {
    	if (x % 2 == 0)
      	  chess += "0";
    	else
      	  chess += "#";
  		}
	chess += "\n"
  	}
console.log(chess);

/*returns
 0#0#0#0#
0#0#0#0#
0#0#0#0#
0#0#0#0#
0#0#0#0#
0#0#0#0#
0#0#0#0#
0#0#0#0#
*/

/*ok this logs 0#0#0#0# everyline bc it is looking thru x=1,2....8 which is the same on everyline. 
changing to y % 2 = 0 would log 00000000 for odd lines and ######## for even lines. to switch, test (x+y) % = 0
*/


var size = 12;
var chess = "";
	for(var y = 0; y < size; y++) {
	  for (var x = 0; x < size; x++) {
    	if ((x+y) % 2 == 0)
      	  chess += " ";
    	else
      	  chess += "#";
  		}
	chess += "\n"
  	}
console.log(chess);

/*returns
  # # # # # #
# # # # # # 
 # # # # # #
# # # # # # 
 # # # # # #
# # # # # # 
 # # # # # #
# # # # # # 
 # # # # # #
# # # # # # 
 # # # # # #
# # # # # # 

first line has extra space bc of console.log