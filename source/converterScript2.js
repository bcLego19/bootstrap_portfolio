/*

	Conner Batson
	sample page converter code
	Used with the test converter for various conversions.
	last edit 5/16/2022

*/

let Input1 = document.getElementById("field1b").value;
let Output1 = document.getElementById("field2b");
let index1 = document.getElementById("sel1b").selectedIndex;
let index2 = document.getElementById("sel2b").selectedIndex;
let temp1 = 0;

function converter() {
	
	Input1 = document.getElementById("field1b").value;
	Output1 = document.getElementById("field2b");
	index1 = document.getElementById("sel1b").selectedIndex;
	index2 = document.getElementById("sel2b").selectedIndex;
	
	console.log("conv 1: "+isNaN(Input1 = Number(Input1)));
	
	if ( isNaN(Input1) ) console.log("true");
	else console.log("false");
	
	if ( isNaN(index1 = Number(index1))|| isNaN(index2 = Number(index2)) || isNaN(Input1 = Number(Input1)) ) {
		
		console.log("Not a number");
		Output1.value = "Invalid Input. Not a Number.";
		
	} else if ( index1 == index2 ) {
		
		console.log("conv same index: "+Number(Input1));
		Output1.value = Input1;
		
	} else {
		
		console.log("not same index");
		
		if ( index1 == 0) {
			
			Output1.value = indexer1(Input1);
			
		} else if ( index1 == 1 ) {
			
			Output1.value = indexer2(Input1);
			
		} else if ( index1 == 2 ) {
			
			Output1.value = indexer3(Input1);
			
		} else {
			console.log("error state");
		}
		
	}
	
	console.log("conv end");
	
}

function indexer1(value) {
	let res = 0;
	
	if ( index2 == 1) {
		res = value * 0.1;
	} else if ( index2 == 2 ) {
		res = value * 0.001;
	} else {
		res = NaN;
	}
	
	return res;
	
}

function indexer2(value) {
	let res = 0;
	
	if ( index2 == 0) {
		res = value * 10;
	} else if ( index2 == 2 ) {
		res = value * 0.01;
	} else {
		res = NaN;
	}
	
	return res;
	
}

function indexer3(value) {
	let res = 0;
	
	if ( index2 == 0) {
		res = value * 1000;
	} else if ( index2 == 1 ) {
		res = value * 100;
	} else {
		res = NaN;
	}
	
	return res;
	
}

function selectOneChange() {
	index1 = document.getElementById("sel1b").selectedIndex;
	converter();
}

function selectTwoChange() {
	index2 = document.getElementById("sel2b").selectedIndex;
	converter();
}


