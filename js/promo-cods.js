$(function () {
	let a = 'd';
	a = 1;
	console.log(a);
	let dog = {
		name: 'Bobik',
		age: 3,
		color: 'black',
	};
	console.log(dog);

	function printDogName(dog) {
		console.log(dog.name);
	}

	printDogName(dog);

	$('.promo-cods__item').click(function () {
		$(this).toggleClass('flipped');
	});
});
