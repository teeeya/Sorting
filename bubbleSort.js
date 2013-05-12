//Bubble sort in javascript
var unsortedArray = [0,90,90,4,5,6,12,3,4,5,0,209987,0.2];
var numberOfChangesMade=1;
var numOfChangesTotal =0;
var changed = true;
function bubbleSort(unsortedArray){
		while(numberOfChangesMade!=0){ //While there were chaneges made, check again
			numberOfChangesMade = numberOfChangesMades();
		}
		function numberOfChangesMades(){
			numberOfChangesMade=0;
			for (var i =0; i<unsortedArray.length && unsortedArray.length!=0; i++){//go thorugh array and swap
					var firstValue = unsortedArray[i];
					var secondValue = unsortedArray[i+1];
					if(firstValue > secondValue){
						unsortedArray[i] = secondValue;
						unsortedArray[i+1] = firstValue;
						numberOfChangesMade++;
						numOfChangesTotal++;
					}
					else if(firstValue === secondValue){
						numberOfChangesMade=numberOfChangesMade;
					}
			}

			return numberOfChangesMade;
		}
	return unsortedArray;
}
console.log("Sorted array: "+bubbleSort(unsortedArray) +" Number of number of changes mades "+numOfChangesTotal);