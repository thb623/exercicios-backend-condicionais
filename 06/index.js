const alturaEmCm = 205;

//seu código aqui
if(alturaEmCm >= 180){
    console.log("APROVADO")
    if(alturaEmCm <= 185){
        console.log("LÍBERO")
    }
    else if(alturaEmCm >= 186 && alturaEmCm <=195){
        console.log("PONTEIRO")
    }
    else if(alturaEmCm >= 196 && alturaEmCm <= 205){
        console.log("CENTRAL")
    }
}else{
    console.log("REPROVADO")
}