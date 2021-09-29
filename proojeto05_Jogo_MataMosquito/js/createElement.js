function posicaoRandom(altura, largura){
    var posX = Math.floor(Math.random() * altura) - 80
    var posY = Math.floor(Math.random() * largura) - 80
    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    //criando personagem
    var mosca = document.createElement("img")
    mosca.src = "./img/mosca.png"
    mosca.classList.add(classesRandom())
    mosca.style.left = `${posX}px`
    mosca.style.top = `${posY}px`
    mosca.style.position = 'absolute'
    document.body.appendChild(mosca)
}
