var CelebID = function(){
	var ID = 0;
	return {
		get:function(){
			return ID;
		},
		set:function(num){
			ID = num;
		}
	}
}

var celeb = CelebID();

console.log(celeb.get());
celeb.set(200);
console.log(celeb.get());
console.log(celeb.ID);