var fs = require('fs');

fs.readFile("weather.csv","utf-8",function(err,data){
	if(err) return console.log(err);
	var breakArray = data.split("\n");
	var weather = [];
	for(i = 1; i < breakArray.length; i++){
		if(breakArray[i] != ''){
			var each = breakArray[i].split(",");
			weather.push({day:parseInt(each[0]),spread:parseInt(each[1])-parseInt(each[2])});
		}
	}
	var min = 1000;
	var res = {};
	for(i in weather){
		var diff = weather[i].spread;
		if(min > diff) {
			res = weather[i]; 
			min = diff;
		}
	}
	console.log(res);
})