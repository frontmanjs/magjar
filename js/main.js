const navToggle = document.querySelector('.navbar-toggler');
const links = document.querySelectorAll('.link');
const body = document.querySelector('body');


const navToggler = () => {
	links.forEach((link) => {
		link.classList.toggle('show');
	});
};


navToggle.addEventListener('click', navToggler);

links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((link) => {
      link.classList.remove('show');
		});
	});
});
