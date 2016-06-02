var data = "32.6 31.2 35.2 37.4 44.9 42.1 44.1";
var temp_array = data.split(" ").map(Number);
var final_array = temp_array.slice();

for(i=1;i<temp_array.length-1;i++){
	final_array[i]=((temp_array[i-1]+temp_array[i]+temp_array[i+1])/3);
}

console.log(final_array);