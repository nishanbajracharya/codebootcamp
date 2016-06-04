arr = [[1,2,3],[1,2],[4,56,7,8,4]];
for(i in arr){
	var row = parseInt(i) + 1;
	console.log("ROW : " + row);
	for(j in arr[i]){
		console.log(arr[i][j]);
	}
}