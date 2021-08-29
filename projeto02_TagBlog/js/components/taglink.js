let links = document.getElementById('links')
let elementoHTML = (desc) => {
    return `
      <a href="#" id=${desc}>${desc}</a>
    `
}
const descLinks = [
    {nomeLink : 'Frontend'},
    {nomeLink : 'Backend'},
    {nomeLink : 'BancodeDados'},
    {nomeLink : 'infraestrutura'},
]

links.innerHTML = descLinks.map((l)=>{
    return elementoHTML(l.nomeLink)
}).join('')