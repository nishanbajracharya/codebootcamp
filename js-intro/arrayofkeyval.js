var obj = {
	key1:"val1",
	key2:"val2",
	key3:"val3",
	key4:"val4"
}

var arrofkeyval = function(object){
	var arr = [];
	for(i in object){
		arr.push([i,object[i]]);
	}
	return arr;
}

console.log(arrofkeyval(obj));