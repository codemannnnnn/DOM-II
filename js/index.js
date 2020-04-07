// Your code goes here


//UNIVERSAL FUNCTIONS QUERYSELECTORS
const get = (selector) => {
  return document.querySelector(selector);
}

const getAll = (selector) => {
  return document.querySelectorAll(selector);
}


//VARIABLES
const nav = get('.nav');
const allH2s = getAll('h2');
const allH2sArray = Array.from(allH2s);
const bottomButtons = getAll('.btn');
const bottomButtonsArray = Array.from(bottomButtons);
const image = get('.topimg');
const password = get('.form')
const backgroundColor = get('body')




//EVENT LISTENERS
//1 NAV BAR HIGHLIGHTING
let title = get('.logo-heading');
nav.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
  setTimeout(function(){
    event.target.style.color = '';
  }, 500);
}, false);


//2 H2S ALL RED ON HOVER
allH2sArray.forEach(event => {
  event.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';

  });
})


//3 BOTTOM BUTTON COUNTER
bottomButtonsArray.forEach(button => {
  button.addEventListener('click', event =>{
    button.innerHTML = `Click count: ${event.detail}`;
});
});



//4 TOP IMG HOVER SWAP
image.addEventListener('mouseover', ()=>{
  image.src = 'img/bus1.jpg'
})
image.addEventListener('mouseout', ()=>{
    image.src = 'img/fun-bus.jpg'
  })



//5 FORM PASSWORD BLUR
password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});d

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});


//6 PRINT CONSOLE LOG
window.addEventListener('beforeprint', (event) => {
  console.log('Before print');

});
window.addEventListener('afterprint', (event) => {
  console.log('After print');

});


//7 HEADING TITLE COLOR CHANGE
title.addEventListener('click', (event)=>{
  event.target.style.color = 'blue';
})


//8 BACKGROUND COLOR CHANGE ON CLICK
backgroundColor.addEventListener('click', (event)=>{
  event.target.style.background = 'teal';
})
