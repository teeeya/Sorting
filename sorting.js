
var unsortedArray = [20,3000,0,90,34,1,3];
var sortedList = [];
var comparator;
function sorting(unsortedArray){
	//for each item in the array find out how many items it is bigger than
	// This will be its position in the sorted array
	//bigger than 4 == position 4
	for(var i=0; i<unsortedArray.length && unsortedArray.length > 1; i++){
		sortedList[place(unsortedArray[i],unsortedArray)] = unsortedArray[i];
	}
	function place(comparator, array){
		var iamBiggerThan=0;
		for(var j=0; j<array.length;j++){
			if(comparator>array[j]){
				iamBiggerThan++;
			}

			else if(comparator == array[j]){
				console.log("comparator "+comparator+" is bigger "+ array[j]);
				iamBiggerThan++;
			}
		}
		return iamBiggerThan;
	}
	return sortedList;
}
console.log(sorting(unsortedArray));