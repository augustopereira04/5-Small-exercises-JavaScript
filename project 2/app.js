const CoisasPreferidas = {
    fruta: "uva",
    marca: "nike",
    estilo: "Versatil",
    corte: null
}

function addObject(){
    let question = prompt("Qual seu corte: ")
    if(question == "americano" || question == "tamper fade"){
       CoisasPreferidas.corte = question
        console.log(CoisasPreferidas)
    }
    
    
}

addObject()

