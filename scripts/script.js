const copyright = document.querySelector('.copyright');
let date = new Date();
const year = date.getFullYear();

copyright.textContent = `© 2017-${year} «Коврик-РУ»`;

