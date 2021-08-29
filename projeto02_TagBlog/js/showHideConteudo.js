function showHideItens(btnLink, classeCard, cards){
    btnLink.onclick = () => {
        let elementoCard = document.querySelectorAll(`.${classeCard}`)
        setTimeout(() => {
            elementoCard.forEach(element => {
                element.style.display = 'block'
            });
        }, 100);
        cards.forEach(element => {
            element.style.display = 'none'
        });
    }
}