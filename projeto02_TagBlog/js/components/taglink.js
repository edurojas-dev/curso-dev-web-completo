let links = document.getElementById('links')
let elementoHTML = (desc) => {
    return `
        <a href="#">${desc}</a>
    `
}
const descLinks = [
    {nomeLink : 'Home'},
    {nomeLink : 'Frontend'},
    {nomeLink : 'Backend'},
    {nomeLink : 'Banco de Dados'},
    {nomeLink : 'Infraestrutura'},
]

links.innerHTML = descLinks.map((l)=>{
    return elementoHTML(l.nomeLink)
}).join('')