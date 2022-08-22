const dropdown = document.querySelectorAll('#dropdown')
dropdown.forEach(item => item.addEventListener('mouseover', () => console.log('Hovering')))
// Dropdown is a node list of navigation elements
// Each element has its own set of links
// Links should only be visible on hover