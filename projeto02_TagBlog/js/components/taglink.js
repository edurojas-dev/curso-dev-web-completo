let links = document.getElementById('links')
let elementoHTML = (desc) => {
    return `
        <a href="#" id=${desc}>${desc}</a>
    `
}
const descLinks = [
    {nomeLink : 'Home'},
    {nomeLink : 'Frontend'},
    {nomeLink : 'Backend'},
    {nomeLink : 'BancodeDados'},
    {nomeLink : 'Infraestrutura'},
]

links.innerHTML = descLinks.map((l)=>{
    return elementoHTML(l.nomeLink)
}).join('')