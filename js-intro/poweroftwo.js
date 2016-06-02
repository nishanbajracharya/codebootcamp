// Power of 2 using Math function 
var powerOfTwo = function(n){
	return (parseInt(Math.log2(n)) == Math.log2(n));
}

console.log(65 + " => " + powerOfTwo(65));
console.log(2 + " => " + powerOfTwo(2));

// Power of 2 without Math function
var power_of_two = function(n){
	while(n % 2 == 0) {
		n=n/2;
	}
	if(n==1) return true;
	return false;
}


console.log(1024 + " => " + power_of_two(1024));
console.log(1026 + " => " + power_of_two(1026));