var bmi = function(weight,height){
	var scale = weight /(height*height);
	if(scale<18.5) return "Underweight";
	else if(scale<25) return "Normal Weight";
	else if(scale<30) return "Overweight";
	else return "Obese";
}

console.log(bmi(73,1.778))