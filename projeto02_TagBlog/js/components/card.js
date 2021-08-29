let cardElement = (tituloPost, assunto, urlImg, textoPost, linkPost) =>{
    return `
        <div class="card ${assunto}">
            <div class="card-title">
                <h2>
                    ${tituloPost}
                </h2>
                <hr>
                <span>Assunto: ${assunto}</span>
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
            return cardElement(c.tituloPost, c.assunto, c.urlImg, c.textoPost, c.linkPost)
        }).join('')
    })
})