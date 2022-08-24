import pic1 from './alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg'
import pic2 from './karl-muscat-5LOLXAcO59w-unsplash.jpg'
import pic3 from './markus-spiske-TiKZ7tzM4P8-unsplash.jpg'
import pic4 from './mattia-bericchia-HCEC9-bydS0-unsplash.jpg'
import pic5 from './wolfgang-hasselmann-uS0ZSzy-Vpg-unsplash.jpg'
import { imageFactory, appendImg } from './mobile'

const images = [pic1, pic2, pic3, pic4, pic5]
const main = document.querySelector('.main')
const slides = document.createElement('div')
slides.classList.add('slideshow')

appendImg(images, slides, 'slide')

// Slideshow control arrows
const controls = document.createElement('div')
controls.classList.add('controls')
const prev = document.createElement('a')
prev.classList.add('prev')
const next = document.createElement('a')
next.classList.add('next')
prev.textContent = '<'
next.textContent = '>'
controls.append(prev, next)

// Slideshow Dots
const dotsContainer = document.createElement('div')
dotsContainer.classList.add('dots')
function createDots(array){
    for (let i = 0; i < array.length; i++) {
        let dot = document.createElement('div')
        dot.classList.add('dot')
        dot.dataset.index = array[i]
        dotsContainer.append(dot)
    }
}
createDots(images)

slides.append(controls, dotsContainer)
main.append(slides)
const dots = document.querySelectorAll('.dot')
dots.forEach(dot => dot.addEventListener('click', () => console.log(dot.dataset)))