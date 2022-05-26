/*

	Conner Batson
	sample page timer code
	Main driving code that controls the sample_javascript timer.
	Also implements bootstrap elements to create a sample timer 
	that can take in hours, minutes, and seconds, with a start 
	and stop button. Dynamically updates the bootstrap progress 
	bar to reflect the time remaining and alerts the user if the 
	timer finishes or is stopped prematurely.
	Last edit 5/21/2022

*/

//

let tHour = document.getElementById("timerHour");
let tMinute = document.getElementById("timerMinute");
let tSecond = document.getElementById("timerSecond");
let progressBar = document.getElementById("countBar");
let progressDisplay = document.getElementById("progTimerDisplay");

let myTimeout = 0;

// Main function to get the input values for hours, 
// minutes, and seconds. If an error is detected when 
// getting these values (ex: negative time), then the 
// function will alert the user and terminate the main 
// driver function to start the countdown.

function getTime() {
	let time = 0;
	
	if ( tHour.value > 23 || tHour.value < 0 ) {
		alert("Error. Must be valid Hour between 0 and 23.");
		return -1;
	} else if ( tMinute.value > 59 || tMinute.value < 0 ) {
		alert("Error. Must be valid Minute between 0 and 59.");
		return -1;
	} else if ( tSecond.value > 59 || tSecond.value < 0 ) {
		alert("Error. Must be valid Second between 0 and 59.");
		return -1;
	}
	
	console.log("Start collecting time: Hour: "+tHour.value+" Minute: "+tMinute.value+" Second: "+tSecond.value);
	console.log("Start collecting time: Hour: "+(tHour.value * 60 * 60)+" Minute: "+(tMinute.value * 60)+" Second: "+(tSecond.value) )
	time = (tHour.value * 60 * 60) + (tMinute.value * 60) + (tSecond.value * 1);
	console.log("Time: "+time);
	
	return time;
}

// Main function for progress bar. Uses given 
// initialTime and distance variables to calculate 
// the width and color of the progress bar. Also 
// serves to update the countdown numbers by hour, 
// minute, and second in text form.

function updateProgress(initialTime, distance) {
	
	let ratio = distance / initialTime;
	ratio = (ratio * 100)/100;
	
	let isSuccess = progressBar.classList.contains("progress-bar-success");
	let isWarning = progressBar.classList.contains("progress-bar-warning");
	let isDanger = progressBar.classList.contains("progress-bar-danger");
	
	if ( ratio > .5 ) { // if ratio is above 50%, change class to 
		console.log("ratio 50% or lower: " + ratio);
		
		if ( !( isSuccess ) && ( isDanger ) ) { // if class is not progress-bar-success but is progress-bar-danger
			
			progressBar.classList.remove("progress-bar-danger");
			progressBar.classList.add("progress-bar-success");
			
		} else if ( !( isSuccess ) && ( isWarning ) ) { // if class is not progress-bar-success but is progress-bar-warning
			
			progressBar.classList.remove("progress-bar-warning");
			progressBar.classList.add("progress-bar-success");
			
		}
		
	} else if ( ratio > .1 ) {
		console.log("ratio 90% or lower: " + ratio);
		
		if ( !( isWarning ) && ( isDanger ) ) { // if class is not progress-bar-warning but is progress-bar-danger
			
			progressBar.classList.remove("progress-bar-danger");
			progressBar.classList.add("progress-bar-warning");
			
		} else if ( !( isWarning ) && ( isSuccess ) ) { // if class is not progress-bar-warning but is progress-bar-success
			
			progressBar.classList.remove("progress-bar-success");
			progressBar.classList.add("progress-bar-warning");
			
		}
		
	} else {
		console.log("ratio above 90%: " + ratio);
		
		if ( !( isDanger ) && ( isSuccess ) ) { // if class is not progress-bar-danger but is progress-bar-success
			
			progressBar.classList.remove("progress-bar-success");
			progressBar.classList.add("progress-bar-danger");
			
		} else if ( !( isDanger ) && ( isWarning ) ) { // if class is not progress-bar-danger but is progress-bar-warning
			
			progressBar.classList.remove("progress-bar-warning");
			progressBar.classList.add("progress-bar-danger");
			
		}
		
	}
	
	let timeHour = ( Math.floor( (distance/1.0) / (60 * 60) ) );
	let timeMin = ( Math.floor( [ (distance/1.0) / 60 ] % 60 ) );
	let timeSec = ( (distance/1.0) % 60 );
	
	let timeCount = timeHour + "h " + timeMin + "m " + timeSec + "s";
	
	progressBar.innerHTML = timeCount;
	progressDisplay.innerHTML = "Timer: " + timeCount;
	
	progressBar.style.width = ( 100 - (ratio * 100) ) + "%";
	
}

// Warning function for completion of timer.

function completionAlert() {
	alert("Your timer has gone off.");
}

// Main driver function synched with Go! button.
// If valid time input, gets the time and starts 
// a countdown clock.

function startTimer() {
	
	let initialTime = ( getTime());
	
	if (initialTime < 0 ) return;
	if (initialTime == 0) {
		alert("Error. No time to countdown.");
		return;
	}
	
	let currentTime = 0;
	let distance = initialTime - currentTime;
	
	console.log("Starting timeout function: "+initialTime);
	
	progressBar.innerHTML = "" + distance;
	updateProgress(initialTime, distance);
	
	myTimeout = setInterval( function() {
		
		console.log("interval");
		currentTime += 1;
		distance = initialTime - currentTime;
		
		updateProgress(initialTime, distance);
		
		if (distance == 0) {
			
			console.log("complete");
			completionAlert();
			clearTimeout(myTimeout);
			progressBar.innerHTML = "Finished";
			
		}
		console.log("end Interval");
		
	}, 1000);
	
	console.log("End startTimer");
	return;
	
}

// Main function to stop the timer. Alerts user of 
// timer cancellation.

function stopTimer() {
	
	console.log("stopTimer Triggered");
	
	clearTimeout(myTimeout);
	alert("Timer Canceled.");
	
}



