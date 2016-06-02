var arr = [1,2,'a',3,'b'];

var arrReverse = function(array){
	var ar = [];
	for(i=0;i<array.length;i++){
		ar[array.length-i-1] = array[i];
	}
	return ar;
}

console.log(arrReverse(arr));