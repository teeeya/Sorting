
var bubbleSortArray = [20,3000,0,90,34,1,3];
var sortedList = []
var comparator;

function sorting(bubbleSortArray){
	verifyArray(bubbleSortArray);
	// Verify the array even contains anything
	function verifyArray(bubbleSortArray){
		if(bubbleSortArray.length === 0 || bubbleSortArray.length === 1){
			console.log("Your array contains 0 or only 1 item");
		}
		return false;
	}
	// Array contains items: Go ahead and sort

	//for each item in the array find out how many items it is bigger than
	// This will be its position in the sorted array
	//bigger than 4 == position 4
	if(verifyArray){
		for(var i=0; i<bubbleSortArray.length; i++){
			sortedList[place(bubbleSortArray[i],bubbleSortArray)] = bubbleSortArray[i];
		}
	}
	function place(comparator, array){
		var iAmSmallerThan=0;
		var iamBiggerThan=0;
		for(var j=0; j<array.length;j++){
			if(comparator<array[j]){
							console.log("comparator "+comparator+" is smaller "+ array[j]);
							iAmSmallerThan++;
			}
			else if(comparator>array[j]){
							console.log("comparator "+comparator+" is bigger "+ array[j]);
							iamBiggerThan++
			}
		}
		return iamBiggerThan;
	}
	console.log(sortedList);
}

sorting(bubbleSortArray);	