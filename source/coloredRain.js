/*
	Conner Batson
	Color Rain Code
	5/22/2022
	Main driver code for animation 5.
	last edit 5/22/2022
*/

function rain() {
	let amount = 100;
	let body = document.querySelector('body');
	let i = 0;
	
	while ( i < amount ) {
		let drop = document.createElement('i');
		
		let size = Math.random() * 5;
		let posX = Math.floor(Math.random() * window.innerWidth);
		let delay = Math.random() * -20;
		let duration = Math.random() * 5;
		
		drop.style.width = 0.2 + size+'px';
		drop.style.left = posX + 'px';
		drop.style.animationDelay = delay + 's';
		drop.style.animationDuration = 1 + duration + 's';
		
		body.appendChild(drop);
		
		i++;
	}
}
	
rain();