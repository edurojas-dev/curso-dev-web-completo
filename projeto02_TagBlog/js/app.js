$(document).ready(() => {
    $(".card").hide()
    setTimeout(() => {
        // let cards = document.querySelectorAll(".card")
        $(".card").hide()

        const tagBlog = [
            { btn: document.getElementById("Frontend"), classeCard: "Frontend" },
            { btn: document.getElementById("Backend"), classeCard: "Backend" },
            { btn: document.getElementById("BancodeDados"), classeCard: "BancodeDados" },
            { btn: document.getElementById("infraestrutura"), classeCard: "infraestrutura"}
        ]
        tagBlog.forEach(element => {
            showHideItens(element.btn, element.classeCard)
        });
    }, 50);
})