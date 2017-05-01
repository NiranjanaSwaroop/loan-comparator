var P = prompt("Enter the amount: ", "");
var r = prompt("Enter the rate of interest per annum: ", "");
var N = prompt("Enter the term in months: ", "");
var R = r / 1200.0;
R.toPrecision(7);
var R1 = R + 1.0;
R1.toPrecision(7);
{
R1=Math.pow(R1, N);
R1.toPrecision(5);
}
var nume = ( P * R ) * R1 ;
nume.toPrecision(5);
var denom = R1 - 1.0;
denom.toPrecision(5);
var emi = nume / denom ;
emi.toPrecision(5);
var EMI=Math.round(emi);
alert("The EMI is Rs " + EMI + " per month"); 


