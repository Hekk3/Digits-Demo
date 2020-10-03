const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close');


closeBtn.addEventListener('click', () => {
	nav.classList.toggle('nav--active');
});

burgerBtn.addEventListener('click', () => {
	nav.classList.toggle('nav--active');
});