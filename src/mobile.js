import sun from './sun-weather-sunny-svgrepo-com.svg'
import talk from './talk-chat-message-svgrepo-com.svg'
const mobileContainer = document.querySelector('.mobile')

const sunPic = new Image();
sunPic.style.width = '50px'
sunPic.src = sun

const talkPic = new Image();
talkPic.style.width = '50px'
talkPic.src = talk

mobileContainer.append(sunPic, talkPic)
