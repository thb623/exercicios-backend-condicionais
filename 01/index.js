const jogada1 = "papel"
const jogada2 = "pedra"

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura"){
    console.log("Jogada 1 venceu")
}else if(jogada1 === "pedra" && jogada2 === "papel"){
    console.log("Jogada 2 venceu")
}else if(jogada1 === "pedra" && jogada2 === "pedra"){
    console.log("Empatou")
}

if (jogada1 === "tesoura" && jogada2 === "pedra"){
    console.log("Jogada 2 venceu")
}else if(jogada1 === "tesoura" && jogada2 === "papel"){
    console.log("Jogada 1 venceu")
}else if(jogada1 === "tesoura" && jogada2 === "tesoura"){
    console.log("Empatou")
}

if (jogada1 === "papel" && jogada2 === "tesoura"){
    console.log("Jogada 2 venceu")
}else if(jogada1 === "papel" && jogada2 === "pedra"){
    console.log("Jogada 1 venceu")
}else if(jogada1 === "papel" && jogada2 === "papel"){
    console.log("Empatou")
}