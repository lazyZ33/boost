// select nav trigger
const navTrigger = document.querySelector('#navTrigger');

// select navigation
const nav = document.querySelector('#nav');

// select the nav close btn
const navCloseBtn = document.querySelector('#navCloseBtn');

// select header
const header = document.querySelector('#header');

// add a click event listener to the nav trigger btn
navTrigger.addEventListener('click', ()=>{
    //toggle the is-open class on navigation element to open/close the menu
    nav.classList.toggle("is-open");

});

// add a click event listener to the nav close btn
navCloseBtn.addEventListener('click', ()=>{
    // remove the 'is-open' range from the navigation element
    nav.classList.remove("is-open");
});

// add a scroll event listener to the window
window.addEventListener('scroll', ()=>{
    //get the current scroll vertical position
    const scrollY = window.scrollY;
    console.log(scrollY);

    // add or remove the active class from the header based on scroll
    scrollY > 50? header.classList.add("is-active") : header.classList.remove("is-active");
});