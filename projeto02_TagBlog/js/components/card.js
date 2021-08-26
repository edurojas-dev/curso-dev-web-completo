let cardElement = (tituloPost, dataPost, urlImg, textoPost, linkPost) =>{
    return `
        <div class="card">
            <div class="card-title">
                <h2>
                    ${tituloPost}
                </h2>
            <span>Postado em ${dataPost}</span>
            </div>
            <div class="card-body">
                <div class="cardImg">
                    <img src="${urlImg}" alt="${urlImg}" style="display: block;">
                </div>
                <div class="cardText">
                    <p>
                        ${textoPost}
                    </p>
                </div>
                <div class="cardLink">
                    <a href="${linkPost}" target="_blank">
                        Leia mais
                    </a>
                </div>            
            </div>
        </div>
    `
}
let conteudos = []
let urlConteudo = "database/conteudos.json"
let areaConteudo = document.getElementById("areaConteudo")
fetch(urlConteudo).then((response)=>{
    response.json().then((data)=>{
        conteudos = data
        areaConteudo.innerHTML = conteudos.map((c)=>{
            return cardElement(c.tituloPost, c.dataPost, c.urlImg, c.textoPost, c.linkPost)
        }).join('')
    })
})

setTimeout(() => {
    let cards = document.querySelectorAll('.card')
    cards.forEach(element => {
        element.onclick = () =>{
            element.classList.add("animated", "heartdBeat")
        }
    });
}, 1000);