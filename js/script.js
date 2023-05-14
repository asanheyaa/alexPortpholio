const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header')

burger.addEventListener('click', function (event) {
	menu.classList.toggle('_active');
	burger.classList.toggle('_active');
	const body = document.querySelector('body');
	body.classList.toggle('_lock');
	header.classList.toggle('_active');
});

const swiper = new Swiper('.swiper', {
navigation: {
    nextEl: '.header-works__right-arrow',
    prevEl: '.header-works__left-arrow',
	},
	autoHeight: true,
});




// 	if (event.target.closest('.link__services')) {
// 		event.preventDefault();
// 		menu.classList.remove('_active');
// 		burger.classList.remove('_active');
// 		const body = document.querySelector('body');
// 		body.classList.remove('_lock');
// 		header.classList.remove('_active');
// 		const services = document.querySelector('.services');
// 		services.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
// 	};
// 	if (event.target.closest('.link__portfolios')) {
// 		event.preventDefault();
// 		menu.classList.remove('_active');
// 		burger.classList.remove('_active');
// 		const body = document.querySelector('body');
// 		body.classList.remove('_lock');
// 		header.classList.remove('_active');
// 		const services = document.querySelector('.portfolios');
// 		services.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
// 	};
// 	if (event.target.closest('.link__experience')) {
// 		event.preventDefault();
// 		menu.classList.remove('_active');
// 		burger.classList.remove('_active');
// 		const body = document.querySelector('body');
// 		body.classList.remove('_lock');
// 		header.classList.remove('_active');
// 		const services = document.querySelector('.experience');
// 		services.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
// 	};
// 	if (event.target.closest('.link__blog')) {
// 		event.preventDefault();
// 		menu.classList.remove('_active');
// 		burger.classList.remove('_active');
// 		const body = document.querySelector('body');
// 		body.classList.remove('_lock');
// 		header.classList.remove('_active');
// 		const services = document.querySelector('.blog');
// 		services.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//         });
// 	};
	
// });

const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			document.querySelectorAll('.menu__link').forEach((link) => {
				if (getId(link) === entry.target.id) {
					link.classList.add('_active');
				} else {
					link.classList.remove('_active');
				};
			});
		};	
		
	});
} , {
	threshold: [0.7, 0.4],
});

document.querySelectorAll('.section').forEach((section) => {
	observer.observe(section);
});


menu.addEventListener('click', (e) => {
	if (e.target.classList.contains('menu__link')) {
		e.preventDefault();
		const section = document.getElementById(getId(e.target));
		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
		menu.classList.remove('_active');
		burger.classList.remove('_active');
		const body = document.querySelector('body');
		body.classList.remove('_lock');
		header.classList.remove('_active');
	};
});

const form = document.forms.nameForm;

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let error = funcValidation(form);

	if (error === 0) {
		form.reset();
		contain.innerHTML = 300;
	} else {
		console.log(':(');
	}

});

function funcValidation() {
	let formsReq = document.querySelectorAll('._req');
	let error = 0;

	for (let i = 0; i < formsReq.length; i++){
		const input = formsReq[i];
		removeFormError(input);
		if (input.getAttribute('name') === 'formEmail') {
			if (emailTest(input)) {
				addFormError(input);
				error++;
				if (!input.nextElementSibling){
				input.parentElement.insertAdjacentHTML(
					'beforeend',
					`<div class="contacts__input-error">Please enter your email</div>`
					);
				}
			};
		} else if (input.value === ''){
			addFormError(input);
			error++;
			if (!input.nextElementSibling){
			input.parentElement.insertAdjacentHTML(
					'beforeend',
					`<div class="contacts__input-error">Please enter your name</div>`
				);
			};
		};

	};
	return error;
};

function addFormError(input) {
	input.classList.add('_error');	
};

function removeFormError(input) {
	input.classList.remove('_error');	
};

function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};


const formName = form.formName;
const formEmail = form.formEmail;

formEmail.addEventListener('focus', (e) => {
	e.target.classList.remove('_error');
	if (e.target.nextElementSibling) {
		e.target.nextElementSibling.remove();
	};
});
formName.addEventListener('focus', (e) => {
	e.target.classList.remove('_error');
	if (e.target.nextElementSibling) {
		e.target.nextElementSibling.remove();
	};
});


const textArea = document.querySelector('.contacts__area');
const maxLength = textArea.getAttribute('maxlength');
const contain = document.querySelector('.contacts__contain span');

contain.innerHTML = maxLength;

textArea.addEventListener('input', (e) => {
	const length = maxLength - textArea.value.length;
	contain.innerHTML = length;
});

// document.querySelectorAll('.navigation-career__title').forEach((tab) => {
// 	tab.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		const id = e.target.getAttribute('href').replace('#', '');

// 		document.querySelectorAll('.navigation-career__title').forEach((child) => {
// 			child.classList.remove('_active');
// 		});

// 		document.querySelectorAll('.content-career__body').forEach((child) => {
// 			child.classList.remove('_active');
// 		});

// 		tab.classList.add('_active');
// 		document.getElementById(id).classList.add('_active');
// 	})
// })



document.querySelector('.navigation-career').addEventListener('click', (e) => {
	
	if (e.target.classList.contains('navigation-career__title')) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');
		document.querySelectorAll('.navigation-career__title').forEach((tab) => {
			tab.classList.remove('_active');
		});
		document.querySelectorAll('.content-career__body').forEach((container) => {
			container.classList.remove('_active');
		});
		e.target.classList.add('_active');
		document.getElementById(id).classList.add('_active');
	}
});

document.querySelector('.navigation-career__title').click();