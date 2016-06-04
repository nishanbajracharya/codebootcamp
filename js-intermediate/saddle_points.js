var arr = [ [7,8,8,8,8],
			[8,5,9,8,4],
			[7,7,8,2,0],
			[9,7,9,7,5],
			[8,3,9,3,3]];


var saddle = function(arr){
	var greatest_of_row = [];
	for(var i in arr){
		var mx = max(arr[i]);
		for(j in arr[i]){
			if(arr[i][j] === mx) greatest_of_row.push({item:mx,row:parseInt(i),col:parseInt(j)});
		}
	}
	//console.log(greatest_of_row);

	var newArray = transpose(arr);

	var smallest_of_col = [];
	for(var i in newArray){
		var mx = min(newArray[i]);
		for(j in arr[i]){
			if(newArray[i][j] === mx) smallest_of_col.push({item:mx,row:parseInt(j),col:parseInt(i)});
		}
	}
	//console.log(smallest_of_col);

	var saddles = [];
	for(var i in greatest_of_row){
		//console.log(smallest_of_col.indexOf(greatest_of_row[i]));
		var g_elm = greatest_of_row[i];
		for(var j in smallest_of_col){
			var s_elm = smallest_of_col[j];
			if(g_elm.row == s_elm.row && g_elm.col == s_elm.col ) saddles.push(g_elm);
		}
		//if(smallest_of_col.includes(greatest_of_row[i])) saddles.push(greatest_of_row[i]);
	}
	return saddles;
}

var max = function(arr){
	var m = 0;
	for(var i in arr){
		if(arr[i]>m) m=arr[i];
	}
	return m;
}

var min = function(arr){
	var m = max(arr);
	for(var i in arr){
		if(arr[i]<m) m=arr[i];
	}
	return m;
}

var transpose = function(array) {
  var newArray = [];
  for (x=0;x<array[0].length;x++) {
    newArray[x] = [];
    for (y=0;y<array.length;y++) {
        newArray[x][y] = array[y][x];
    }
  }
  return newArray;
}

console.log(saddle(arr));