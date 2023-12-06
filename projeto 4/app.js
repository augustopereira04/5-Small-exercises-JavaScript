const roupaNatal = {
    tenis: "nike",
    bone: "aokley", 
    calça: "mizuno",
    dinheiro: {
        saldo: 1000,
        devendo: 300
    }
}

const conferirKit = () => {
    let conferir = prompt("Quais Kits você comprou: ")
    if(conferir == "tenis, bone e calça"){
        console.log("Comprou tudo certinho")
    }
    if(conferir !== "tenis, bone e calça"){
        console.log("Comprou errado")
    }
}

conferirKit()
