var vowels = ['a','e','i','o','u'];

var vowels_count = function(str){
	var count = 0;
	for(i in str){
		if(vowels.indexOf(str[i])>-1) count++;
	}
	return count;
}

console.log(vowels_count("Will this actually work?"))