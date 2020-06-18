// Animates the bargraph and total pledge count.
function animate(){
	var districtBarElements = document.getElementsByClassName('district-bar');
	var districtPledgeTotals = getPledgeNumList();
	changeBarWidths(districtBarElements, districtPledgeTotals);
	animateTotalPledgeCount();
}

// Changes the value of the width property for each bar element.
function changeBarWidths(barElements, pledgeTotals){
	var largestPledge = findLargestPledge(pledgeTotals);
	
	for(var i = 0; i < barElements.length; i++){
		barElements[i].style.width = findPercentage(pledgeTotals[i], largestPledge);
	}
}

// Returns a list of pledge values for each district.
function getPledgeNumList(){
	var districtPlegeElements = document.getElementsByClassName('pledge-num');
	var pledgeNumList = [];

	for(var i = 0; i < districtPlegeElements.length; i++){
		pledgeNumList.push(parseInt(districtPlegeElements[i].textContent, 10));
	}

	return pledgeNumList;
}

// Returns the pledge percentage value relative to the largest pledge number.
function findPercentage(pledgeNum, maxPledgeNum){
	return ((((pledgeNum/maxPledgeNum) * 100/2).toFixed(2)) + '%');
}

// Returns largest pledge total.
function findLargestPledge(pledgeList){
	var largest = 0;

	for(var i = 0; i < pledgeList.length; i++){
		if(pledgeList[i] > largest){
			largest = pledgeList[i];
		}
	}

	return largest;
}

// Changes the value of the total pledge count on an interval starting from 0 to the curent total pledge number.
function animateTotalPledgeCount(){
	var pledgeTotalElement = document.getElementById('total-pledges');
	var currentPledgeTotal = parseInt(pledgeTotalElement.textContent.replace(',',''));
	console.log(currentPledgeTotal);
	var animationPledgeNum = 0;

	var incrementer = setInterval(function(){
		if(animationPledgeNum >= currentPledgeTotal){
			pledgeTotalElement.textContent = currentPledgeTotal.toLocaleString();
    		clearInterval(incrementer);
    		return;
  		}
		pledgeTotalElement.textContent = animationPledgeNum.toLocaleString();
		animationPledgeNum+=3;
	}, 1);
}


