const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const slideEl = document.querySelectorAll('.slide');
let counter = 0;

const slidePrev = () => {
	counter += 100;
	btnNext.classList.remove('hidden');
	slideEl.forEach((el) => {
		el.style.transform = `translateX(${counter}%)`;
	});
	if (counter == 0) {
		btnPrev.classList.add('hidden');
	}
};

const slideNext = () => {
	counter -= 100;
	slideEl.forEach((el) => {
		el.style.transform = `translateX(${counter}%)`;
	});
	btnPrev.classList.remove('hidden');
	if (counter == -300) {
		btnNext.classList.add('hidden');
	}
};

btnPrev.classList.add('hidden');
btnPrev.addEventListener('click', slidePrev);
btnNext.addEventListener('click', slideNext);
