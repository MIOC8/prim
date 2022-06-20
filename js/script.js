
const preloader = document.querySelector('#preloader');
const password = document.querySelector('#password');
const skip = document.querySelector('#skip');
const back = document.querySelector('#back');
const buttonWelcome = document.querySelector('.block__welcome').lastElementChild;
const welcome = document.querySelector('.welcome');
const login = document.querySelector('.login');
const main = document.querySelector('.main');
const ButtonLogin = document.querySelector('.input-button__login');
const inputLogin = document.querySelector('.input__login');
const changeLogin = document.querySelector('.change__login');
const textLogin = document.querySelector(".text__login");
const body = document.querySelector('header');
const inputMain = document.querySelector(".input-search");
const leterMain = document.querySelector(".header-user__main");
const svgMain = document.querySelector(".block-search").lastElementChild;
const clases = document.querySelector(".block-clases__main");
const clases2 = document.querySelector(".block");
const allClases = document.querySelector(".special-clases-text__main").lastElementChild;
const most = document.querySelector(".slider__main2");
let speed = 200;
let ti = 0;
let txt4 = "Create Account";




function typeWriter4() {
    if (ti < txt4.length + 1) {
        textLogin.innerHTML = txt4.slice(0, ti);
        ti++;
        setTimeout(typeWriter4, speed);
    }
}





skip.addEventListener('click', function (e) {
    welcome.classList.add('block-start__hide-soon');
    login.classList.add('block-start__hide-soon');
    welcome.classList.remove('block-start__show');
    body.classList.add('main__active');
})
back.addEventListener('click', function (e) {
    welcome.classList.add('block-start__show');
})
window.addEventListener('load', function (e) {
    preloader.classList.add('block-start__hide-slowly')
})
buttonWelcome.addEventListener('click', function (e) {
    welcome.classList.add('block-start__hide-soon');
    welcome.classList.remove('block-start__show');
    setTimeout(typeWriter4, 1000)
})
ButtonLogin.addEventListener('click', function (e) {
    login.classList.add('block-start__hide-soon');
    setTimeout(typeWriter4, 1000)
    body.classList.add('main__active');
})
inputMain.addEventListener('focus', function (e) {
    svgMain.classList.add('svg__main-active')
    e.target.value = "";
})
inputMain.addEventListener('blur', function (e) {
    svgMain.classList.remove('svg__main-active');
})
inputLogin.addEventListener('change', function (params) {
    if (inputLogin.value != "" && inputLogin.value != "name") {
        let leter = inputLogin.value[0]
        leterMain.innerHTML = leter.toUpperCase()
    }
    else {
        leterMain.innerHTML = ""
    }

}
)
inputLogin.addEventListener('focus', function (e) {
        e.target.value = "";
})
password.addEventListener('focus', function name(e) {
    password.setAttribute('type', 'password')
    e.target.value = "-";
})

const list = document.querySelectorAll('.menu-item__menu');
function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink)
)
$(document).ready(function () {
    $('.slider__main').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        easing: 'ease',
        speed: 700,
        autoplay: true,
        uatoplaySpeed: 4000,
        pauseOnHover: true,
        pauseOnFocus: true,
        draggable: false,
        centerMode: false,
        touchThreshold: 8,
    });
})

$(document).ready(function () {
    $('.slider__main2').slick({
        arrows: false,
        dots: false,
        speed: 400,
        variableWidth: true,
        slidesToScroll: 4,
        touchThreshold: 6,
        infinite: false
    });
    $('.menu-item__menu').mPageScroll2id({
        scrollSpeed: 1500
    })
})
most.addEventListener('click', function (e) {
    if (e.target.closest('.slider-item2__main')) {
        e.target.classList.toggle('slider-item2__main-active')
    }
});
clases.addEventListener('click', function (e) {
    if (e.target.closest('.item-row__main')) {
        e.target.closest('.item-row__main').classList.toggle('item-row__main-active')
    }

}, 'passive: true');
clases2.addEventListener('click', function (e) {
    if (e.target.closest('.item-row__main')) {
        e.target.closest('.item-row__main').classList.toggle('item-row__main-active')
    }

}, 'passive: true');
allClases.addEventListener('click', function () {
    clases.classList.toggle('span__clases-active')
    allClases.classList.toggle('clases-active')
})