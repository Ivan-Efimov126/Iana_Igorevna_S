'use strict'
let counter = 0
let header = Array.from(document.querySelectorAll('header'))
let headerTimer = setInterval(() => {
  if (counter < header.length - 1) {
    ++counter
  } else {
    counter = 0
  }
  header.forEach(element => {
    element.classList.remove('active')
  });
  header[counter].classList.add('active')
}, 3000)

let s03Area12Img = document.querySelector('.s03 .area-12 img')
let s03Area13Li = Array.from(document.querySelectorAll('.s03 .area-13 li'))

s03Area13Li.forEach(element => {
  element.addEventListener('mouseover', () => {
    console.log('Ok!')
    s03Area12Img.setAttribute('src', './images/feature-' + s03Area13Li.indexOf(element) + '.jpg')
  })
});