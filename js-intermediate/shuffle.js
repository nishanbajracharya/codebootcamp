var shuffle = function(arr){
	var ind_array = [];
	var array = [];
	var len = arr.length;

	while(ind_array.length<len){
		var r = random(len);
		if(ind_array.indexOf(r)<0) ind_array.push(r);
	}
	for(i=0;i<len;i++){
		elm = arr[ind_array[i]];
		array.push(elm);
	}
	return array;
}

var random = function(limit){
	return Math.floor(Math.random() * limit);
}

console.log([1,2,3,4,5,6,7]);
console.log(shuffle([1,2,3,4,5,6,7]));
