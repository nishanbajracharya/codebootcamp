var library = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

var sortbytitle = function(obj){
	var array = [];
	var temp_array = [];
	for(i in obj){
		temp_array.push(obj[i].title);
	}
	temp_array.sort();
	for(i in temp_array){
		for(j in obj){
			if(temp_array[i]==obj[j].title) array.push(obj[j]);
		}
	}
	return array;
}

console.log(sortbytitle(library));