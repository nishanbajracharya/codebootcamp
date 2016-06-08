var fs = require('fs');

fs.readFile("football.csv","utf-8",function(err,data){
	if(err) return console.log(err);
	var breakArray = data.split("\n");
	var teams = [];
	for(i = 1; i < breakArray.length; i++){
		if(breakArray[i] != ''){
			var each = breakArray[i].split(",");
			teams.push({name:each[0],for:parseInt(each[5]),against:parseInt(each[6])});
		}
	}
	var min = 1000;
	var res = "";
	for(i in teams){
		var diff = teams[i].for - teams[i].against;
		if(min > diff) {
			res = teams[i].name; 
			min = diff;
		}
	}
	console.log(res);
})