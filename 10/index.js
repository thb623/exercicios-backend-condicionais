const caractere = 6;

if(caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u"){
    console.log("Vogal minúscula")
}else if(caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U"){
    console.log("Vogal maiúscula")
}else if (caractere >= "0" && caractere <= "9") {
    console.log("O caractere é um número");
}else if ((caractere >= "A" && caractere <= "Z") || (caractere >= "a" && caractere <= "z")) {
    console.log("O caractere é uma consoante");
}else{
    console.log("caractere inválido")
}