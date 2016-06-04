var palindrome = function(str){
	string = remspaces(str).toLowerCase();
	if(string===reverse(string)) return true;
	return false;
}

var remspaces = function(str){
	var string = "";
	for(i in str){
		if(str[i]!==" ") string+=str[i];
	}
	return string;
}

var reverse = function(str){
	var string = "";
	for(i=0;i<str.length;i++){
		string += str[str.length-i-1];
	}
	return string;
}

console.log(palindrome("A Santa at Nasa"));
console.log(palindrome("Anna"));
console.log(palindrome("A white cake is where things fly"));