
var unsortedArray = [90,90,200,1];
var change=0;
var runs =0;
function bubbleSort(unsortedArray){
		changes(unsortedArray); //call it for the first time to set runs and change
		while(change!=0 && runs>0){
			change = changes(unsortedArray);
			console.log(change);
		}
		function changes(unsortedArray){
			change=0;
			for (var i =0; i<unsortedArray.length && unsortedArray.length!=0; i++){
					var firstValue = unsortedArray[i];
					var secondValue = unsortedArray[i+1];
					if(firstValue > secondValue){
						unsortedArray[i] = secondValue;
						unsortedArray[i+1] = firstValue;
						change++;
						runs++;
					}
					else if(firstValue === secondValue){
						change=change;
					}
			}
			return change;
		}
	return unsortedArray;
}
console.log("Sorted array: "+bubbleSort(unsortedArray) +" Number of changes "+runs);