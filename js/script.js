const nav = document.querySelector('#nav'),
navBtn = document.querySelector('#nav-btn'),
navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
	if(nav.classList.toggle('open')) {
		navBtnImg.src = "./images/icons/nav-close.svg";
	} else {
		navBtnImg.src = "./images/icons/nav-open.svg";
	}
};



AOS.init();

// Сработает один раз
// AOS.init({
//   disable: mobile, 
// 	once: true
// });