// First hides links from display
// then lets them drop down on hover
function interactiveLinks(element){ // element = selector (class, id, data...)
    const navParent = document.querySelector(element) 
    const links = [...navParent.children]
    links.forEach(item => item.style.display = 'none')
    navParent.addEventListener('mouseover', () => {
        links.forEach(item => item.style.display = 'block')
    })
    navParent.addEventListener('mouseout', () => {
        links.forEach(item => item.style.display = 'none')
    })
}

interactiveLinks('.group1')

function dropLinks(){
    
}