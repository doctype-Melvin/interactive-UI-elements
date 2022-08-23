// First hides links from displa
// then lets them drop down on hover
function dropLinks(element){ // element = selector (class, id, data...)
    const navParent = document.querySelector(element) 
    const links = [...navParent.children]
    links.forEach(item => item.style.display = 'none')
    navParent.addEventListener('mouseover', () => console.log('Hover'))
    console.log(navParent)
}

dropLinks('.group1')