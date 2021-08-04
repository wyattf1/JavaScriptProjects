function convertToRoman(num) {
//Break the number into Thousands, Hundreds, Tens and Ones, and write down each in turn.
//get the digits
const numStr = num.toString();
const len = numStr.length;
let Thousands = 0, Hundreds = 0, Tens = 0;
if(len>=2){Tens=parseInt(numStr[len-1-1]);}
if(len>=3){Hundreds=parseInt(numStr[len-1-2]);}
if(len==4){Thousands=parseInt(numStr[0]);}
const Ones=num%10;
const lookup=[
    ["","I","II","III","IV","V","VI","VII","VIII","IX"],
    ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["","M","MM","MMM"]];
return lookup[3][Thousands]+lookup[2][Hundreds]+
lookup[1][Tens]+lookup[0][Ones];
}

convertToRoman(36);
