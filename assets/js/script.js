const projectName = 'product-landing-page';
localStorage.setItem('example_project', 'Product Landing Page');

document.addEventListener('DOMContentLoaded', (event) => {
	const scrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#nav-bar'
	});
});