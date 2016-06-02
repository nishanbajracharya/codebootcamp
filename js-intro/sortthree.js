var num1=1, num2=-4, num3=0;
var sorted = [];
if(num1 >num2 && num1 >num3){
	if(num2>num3) sorted= [num1,num2,num3];
	else sorted = [num1, num3, num2];
}else if(num2>num1 && num2>num3){
	if(num1>num3) sorted = [num2, num1, num3];
	else sorted = [num2, num3, num1];
}else{
	if(num1>num2) sorted = [num3,num1,num2];
	else sorted = [num3, num2, num1];
}
console.log(sorted);