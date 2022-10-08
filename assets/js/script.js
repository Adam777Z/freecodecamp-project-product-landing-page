const projectName = 'product-landing-page';
localStorage.setItem('example_project', 'Product Landing Page');

document.addEventListener('DOMContentLoaded', (event) => {
	const ScrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#nav-bar'
	});

	document.querySelector('#form').addEventListener('submit', (event2) => {
		event2.preventDefault();
		alert('Unavailable.');
	});
});