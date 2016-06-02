var array1 = [1,2,3];
var array2 = [20,14,3];

var mergearray = function(arr1,arr2){
	var array = [];
	for(i in arr1){
		if(array.indexOf(arr1[i])<0) array.push(arr1[i]); 
	}
	for(i in arr2){
		if(array.indexOf(arr2[i])<0) array.push(arr2[i]); 
	}
	return array;
}

console.log(mergearray(array1,array2));