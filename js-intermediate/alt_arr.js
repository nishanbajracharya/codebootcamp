var arr1 = ["a","b","c","d","e","f"];
var arr2 = [1,2,3,4];

var alt_join = function(arr1,arr2){
	var len = max(arr1.length,arr2.length);
	var array = [];
	for(i=0;i<len;i++){
		if(arr1[i] != undefined) array.push(arr1[i]);
		if(arr2[i] != undefined) array.push(arr2[i]);
	}
	return array;
}

var max = function(num1,num2){
	if(num1>num2) return num1;
	return num2;
}

console.log(alt_join(arr1,arr2));
