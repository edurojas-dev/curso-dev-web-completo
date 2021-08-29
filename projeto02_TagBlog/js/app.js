$(document).ready(() => {
    setTimeout(() => {
        let cards = document.querySelectorAll(".card")
        cards.forEach(element => {
            element.style.display = 'none'
        });

        const tagBlog = [
            { btn: document.getElementById("Frontend"), classeCard: "Frontend" },
            { btn: document.getElementById("Backend"), classeCard: "Backend" },
            { btn: document.getElementById("BancodeDados"), classeCard: "BancodeDados" }
        ]
        tagBlog.forEach(element => {
            showHideItens(element.btn, element.classeCard, cards)
        });
    }, 50);
})