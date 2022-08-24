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

main.append(slides)