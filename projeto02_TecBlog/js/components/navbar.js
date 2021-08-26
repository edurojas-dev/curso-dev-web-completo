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
        <div class="conteudo">
            <div>
                <h2></h2>
            </div>
        </div>
        <div class="postgens">
            <h2>postgens</h2>
        </div>
    </main> 
`
let footer = `
    <footer></footer>
`

let elementos = [
    {elemento: navbar}, {elemento: main}, {elemento: footer}
]

app.innerHTML = elementos.map((e)=>{
    return e.elemento
}).join('')