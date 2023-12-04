const listGod = [9,10,]
const listBad = [1]
const listMiddle = [5]

function avaliation(){
    let question = prompt("what grade does the product deserve; ")
    if(question >= 7){
        listGod.unshift(question)
    }
    if(question < 5){
        listBad.unshift(question)
    }
    if(question >= 5 && question <= 6){
        listMiddle.unshift(question)
    }
    arrayGod()
    arrayBad()
    arrayMiddle()
}

function arrayGod(){
    for(i = 0; i < listGod.length; i++){
        console.log("Até Agora temos",listGod.length, "avaliações positivas")
    }}
    function arrayBad(){
    for(i = 0; i < listBad.length; i++){
        console.log("Até Agora temos",listBad.length,"avaliações negativas")
    }}
    function arrayMiddle(){
        for(i = 0; i < listMiddle.length; i++){
            console.log("Até agora temos", listMiddle.length,"avaliações medianas")
        }
    }

avaliation()