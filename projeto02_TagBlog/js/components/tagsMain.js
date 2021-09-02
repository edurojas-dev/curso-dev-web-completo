let app = document.getElementById("app")
let navbar = `
    <nav class="navbar">
        <!-- div da logo -->
        <div id="titleSite"></div>

        <!-- div das tags de links -->
        <div id="links"></div>
    </nav>
`
let main = `
    <main>
        <div class="conteudo" id='areaConteudo'>
            
        </div>
        <!--<div class="postgens">
            <h2>postgens</h2>
        </div>-->
    </main> 
`
let footer = `
    <footer class=rodape>
        <p>Todos os direitos Reservados 2021</p>
        <p>
            Desenvolvido por <a href="https://eduardorojas.com.br/" style="color: #000000; text-decoration: none;">Eduardo Rojas</a>
        </p>
    </footer>
`

let elementos = [
    {elemento: navbar}, {elemento: main}, {elemento: footer}
]

app.innerHTML = elementos.map((e)=>{
    return e.elemento
}).join('')