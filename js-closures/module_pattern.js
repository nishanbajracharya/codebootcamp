var GradeCalculator = (function(){
	var grades = [78,33,65,87,98];
	return {
		Failing : function(){
			var res = 0;
			for(i in grades){
				if(grades[i]<70) res++;
			}
			return "You failed " + res + " times";
		},
		Average : function(){
			var sum = 0;
			var nm = grades.length;

			for(i in grades){
				sum += grades[i];
			}
			return "Your average is " + sum/nm;
		}
	}
})();

console.log(GradeCalculator.Failing());
console.log(GradeCalculator.Average());