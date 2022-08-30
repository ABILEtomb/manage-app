const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');
const btnOne = document.querySelector('.circle-one');
const btnTwo = document.querySelector('.circle-two');
const btnThree = document.querySelector('.circle-three');
const btnFour = document.querySelector('.circle-Four');
const reviewOne = document.querySelector('.review-one');
const reviewTwo = document.querySelector('.review-two');
const reviewThree = document.querySelector('.review-three');
const reviewFour = document.querySelector('.review-four');

btnOne.classList.add('colored');
reviewOne.classList.add('show');


menu.addEventListener('click', () => {
    navLinks.classList.add('style');
    menu.classList.add('hide');
    closeBtn.classList.add('show');


})
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('style');
    closeBtn.classList.remove('show');
    menu.classList.remove('hide');
})
btnOne.addEventListener('click', () => {
    reviewOne.classList.add('show');
    reviewTwo.classList.remove('show');
    reviewThree.classList.remove('show');
    reviewFour.classList.remove('show');
    btnOne.classList.add('colored');
    btnTwo.classList.remove('colored');
    btnThree.classList.remove('colored');
    btnFour.classList.remove('colored');

})
btnTwo.addEventListener('click', () => {
    reviewTwo.classList.add('show');
    reviewOne.classList.remove('show');
    reviewThree.classList.remove('show');
    reviewFour.classList.remove('show');
    btnOne.classList.remove('colored');
    btnTwo.classList.add('colored');
    btnThree.classList.remove('colored');
    btnFour.classList.remove('colored');


})
btnThree.addEventListener('click', () => {
    reviewThree.classList.add('show');
    reviewOne.classList.remove('show');
    reviewTwo.classList.remove('show');
    reviewFour.classList.remove('show');
    btnOne.classList.remove('colored');
    btnTwo.classList.remove('colored');
    btnThree.classList.add('colored');
    btnFour.classList.remove('colored');

})
btnFour.addEventListener('click', () => {
    reviewFour.classList.add('show');
    reviewOne.classList.remove('show');
    reviewTwo.classList.remove('show');
    reviewThree.classList.remove('show');
    btnOne.classList.remove('colored');
    btnTwo.classList.remove('colored');
    btnThree.classList.remove('colored');
    btnFour.classList.add('colored');
})