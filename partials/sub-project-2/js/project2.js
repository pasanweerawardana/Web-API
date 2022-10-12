console.log('ih', window.innerHeight);
console.log('oh', window.outerHeight);

console.log('iw', window.innerWidth);
console.log('ow', window.outerWidth);

const boxElm = document.querySelector('#box');

console.log(boxElm.clientWidth, boxElm.clientHeight);
boxElm.style.top = `${innerHeight - 80}px`;