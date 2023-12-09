class rotina {
    manha;
    tarde;
    noite; 

    constructor(manha, tarde, noite ){
    this.manha = manha
    this.tarde = tarde
    this.noite = noite
    }
}



function question(){
    let question1 = prompt("O que faz de manhã: ")
    let question2 = prompt("O que faz de tarde: ")
    let question3 = prompt("o que faz de noite:")
    
    rotina.manha = question1
    rotina.tarde = question2
    rotina.noite = question3

    console.log(rotina.manha)
    console.log(rotina.tarde)
    console.log(rotina.noite)
}

question()



