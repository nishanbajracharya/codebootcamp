var Longest_Country_Name = function(arr){
	var longest = "";
	var count = 0;
	for(i in arr){
		if(arr[i].length > count){
			count = arr[i].length;
			longest = arr[i];
		}
	}
	return longest;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));