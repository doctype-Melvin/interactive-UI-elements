import sun from './sun-weather-sunny-svgrepo-com.svg'
import talk from './talk-chat-message-svgrepo-com.svg'
import waves from './waves-sea-ocean-svgrepo-com.svg'
import calendar from './week-calendar-holiday-svgrepo-com.svg'
import whirlpool from './whirlpool-sea-water-svgrepo-com.svg'

const mobileContainer = document.querySelector('.mobile')
let icons = [sun, talk, waves, calendar, whirlpool]

function createIcon(image) {
    const icon = new Image()
    icon.style.width = '50px'
    icon.src = image
    icon.classList.add('img')
    icon.addEventListener('mouseover', () => icon.style.cursor = 'pointer')
    icon.style.marginRight = '10px'
    return icon
}

function appendIcons(array) {
    return array.map(item => mobileContainer.append(createIcon(item)))
}

appendIcons(icons)