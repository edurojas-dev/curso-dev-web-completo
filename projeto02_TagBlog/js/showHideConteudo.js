function showHideItens(btnLink, classeCard){
    setTimeout(() => {
        $(".card").hide()
    }, 1);
    if(classeCard == "Frontend"){
        setTimeout(() => {
            let f = document.querySelectorAll(".Frontend")
            f.forEach(cardsFront => {
                cardsFront.style.display = 'block'
            });
        }, 100);
    }
    btnLink.onclick = () => {
        let elementoCard = document.querySelectorAll(`.${classeCard}`)
        $(".card").hide()
        setTimeout(() => {
            elementoCard.forEach(element => {
                element.style.display = 'block'
            });
        }, 50);
        
        console.log(`Clicou no botao: ${btnLink.id}`)
    }
}