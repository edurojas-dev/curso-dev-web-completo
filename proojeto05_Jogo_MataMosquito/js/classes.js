function classesRandom(){
    let classeValor = Math.floor(Math.random() * 3)
    console.log(classeValor)
    switch(classeValor){
        case 0:
            return "mosca"

        case 1:
            return "mosca2"

        case 2:
            return "mosca3"
    }
}