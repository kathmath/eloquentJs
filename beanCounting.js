/*exercize from http://eloquentjavascript.net/03_functions.html#p_Yv2DEaMWee
You can get the Nth character, or letter, from a string by writing "string".charAt(N), 
similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). 
The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character 
string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are 
in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). 

Rewrite countBs to make use of this new function.*/

/*TRIES*/

function countBs (string) {
	var count = 0;
		for (i = 0; i < string.length; i++)
		function countBs(string) {
			if (string.caraAt(i) == B)
				return count += 1;
		}
}




for (var number = 0; number <= 12; number = number + 2)
  console.log(number);

while (number <= 12) {
  console.log(number);
  number = number + 2;
}




function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

