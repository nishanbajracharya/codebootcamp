var counter = (function(){
	var count = 0;

	return function(){
		count++;
		return count;
	}
})();

for(i=0;i<10;i++){
	console.log(counter());
}
