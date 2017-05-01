function emi()
{
var P=document.getElementById("amount");
var N=document.getElementById("term");
var r=document.getElementById("rate");
if (P.value == "") {
alert("You did not enter the amount\n" + "Please enter now" );
P.focus();
return false;
}
if (N.value == "") {
alert("You did not enter the term\n" + "Please enter now" );
N.focus();
return false;
}
if (r.value == "") {
alert("You did not enter the rate\n" + "Please enter now" );
r.focus();
return false;
}
var R=r/2.0;
R.toPrecision(7);
alert(R);
R=R/2.0;
R.toPrecision(7);
alert(R);
R=R/3.0;
R.toPrecision(7);
alert(R);
R=R/10.0;
R.toPrecision(7);
alert(R);
R=R/10;
R.toPrecision(7);
alert(R);
var R1=R+1;
alert(R1);
for( i=1; i <= N ;i++){
R1 = R1 * R1;
R1.toPrecision(7);
}
alert(R1);
var nume = P * R * R1;
nume.toPrecision(7);
alert(nume);
var denom = R1 - 1.0 ;
denom.toPrecision(7);
alert(denom);
var EMI = nume / denom ;
alert("The EMI is Rs" + EMI + " per month"+"\n");
}

