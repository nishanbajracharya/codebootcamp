var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var counts = {};

for(i in arr){
	if(!counts.hasOwnProperty(arr[i])) counts[arr[i]]={item:arr[i],count:1};
	else {
		var c = counts[arr[i]].count;
		counts[arr[i]]={item:arr[i],count:c+1};
	}
}
console.log(counts);

var large = 0;
var elm = {};
for(i in counts){
	if(counts[i].count>large) elm = counts[i];
}
console.log(elm);