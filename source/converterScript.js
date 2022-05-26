/*

	Conner Batson
	sample page converter code
	Used with the test converter for various conversions.
	last edit 5/16/2022

*/

let Input = document.getElementById("field1").value;
let Output = document.getElementById("field2");
let index = document.getElementById("sel1").selectedIndex;
let temp = 0;

function myFunction() {
	Input = document.getElementById("field1").value;
	Output = document.getElementById("field2");
	index = document.getElementById("sel1").selectedIndex;

	console.log("myFunc 1");

	if ( (Input = Number(Input)).isNaN ) {
	
		console.log("myFunc NAN");
		Output = "This is not a number";
	
	} else {
	
		console.log("myFunc isNumber: "+Input);

		if (index >= 0 || index <= 5) { // temperature
			
			tempConvert(Input);
			
		} else {
		
			console.log("myFunc error state");
			Output.value = "Error in calculating";
		
		}
	
	}
	
	console.log("myFunc end");

}

/*
	tempConvert function. If index 0 to 5,
	converts input to desired temperature
*/

function tempConvert(value) {
	if (index == 0) { // farenheit to celsius
		
			console.log("myFunc opt 0");
			temp = tempFarToCel(value);
			
			console.log("myFunc opt 0 res: "+temp);
			Output.value = temp;
		
		} else if (index == 1) { // celsius to farenheit
		
			console.log("myFunc opt 1");
			temp = tempCelToFar(value);
			
			console.log("myFunc opt 1 res: "+temp);
			Output.value = temp;
		
		} else if (index == 2) { // celsius to kelvin
		
			console.log("myFunc opt 2");
			temp = tempCelToKel(value);
			
			console.log("myFunc opt 2 res: "+temp);
			Output.value = temp;
		
		} else if (index == 3) { // kelvin to celsius
		
			console.log("myFunc opt 3");
			temp = tempKelToCel(value);
			
			console.log("myFunc opt 3 res: "+temp);
			Output.value = temp;
		
		} else if (index == 4) { // farenheit to kelvin
		
			console.log("myFunc opt 4");
			temp = tempFarToKel(value);
			
			console.log("myFunc opt 4 res: "+temp);
			Output.value = temp;
		
		} else if (index == 5) { // kelvin to farenheit
		
			console.log("myFunc opt 5");
			console.log("myFunc opt 4 res: "+temp);
			
			temp = tempKelToFar(value);
			Output.value = temp;
		
		} else {
			console.log("Unknown Error");
		}
		
}

/*
	Temperature utility functions
*/
function tempFarToCel(farenheit) { // farenheit to celsius
	let far = Number(farenheit);
	console.log("tempFarToCel 1: "+far);
	return ( (far - 32) * (5/9) );
}

function tempCelToFar(celsius) { // celsius to farenheit
	let cel = Number(celsius);
	console.log("tempCelToFar 1: "+cel);
	return ( ( cel * (9/5) ) + 32 );
}

function tempCelToKel(celsius){ // celsius to kelvin
	let cel = Number(celsius);
	console.log("tempCeltoKel 1: "+cel);
	return ( cel + 273.15 );
}

function tempKelToCel(kelvin){ // kelvin to celsius
	let kel = Number(kelvin);
	console.log("tempKelToCel 1: "+kel);
	return ( kel - 273.15 );
}

function tempFarToKel(farenheit) { // farenheit to kelvin
	let far = Number(farenheit);
	console.log("tempFarToKel 1: "+far);
	return ( tempFarToCel(far) + 273.15 );
}

function tempKelToFar(kelvin) { // kelvin to farenheit
	let kel = Number(kelvin);
	console.log("tempKelToFar 1: "+kel);
	return ( tempCelToFar( kel - 273.15 ) );
}

/*

*/

