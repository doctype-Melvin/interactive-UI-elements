import sun from './sun-weather-sunny-svgrepo-com.svg'
import talk from './talk-chat-message-svgrepo-com.svg'
import waves from './waves-sea-ocean-svgrepo-com.svg'
import calendar from './week-calendar-holiday-svgrepo-com.svg'
import whirlpool from './whirlpool-sea-water-svgrepo-com.svg'

const mobileContainer = document.querySelector('.mobile')
let icons = [sun, talk, waves, calendar, whirlpool]

export function imageFactory(image, classe) {
    const icon = new Image()
    icon.src = image
    icon.classList.add(classe)
    return icon
}

export function appendImg(array, section, classe) {
    return array.map(item => section.append(imageFactory(item, classe)))
}

appendImg(icons, mobileContainer, 'icon')