$(()=>{
    //add classe css para implementar background e 100vh no body
    document.body.classList.add("corpo")
    var altura = window.innerWidth
    var largura = window.innerHeight
    
    // funções da aplicação
    posicaoRandom(altura, largura)
})