const idade = 18;
const possuiPatologia = false;
const altura = 170;
const ehEstudante = false;

if( idade < 12 || idade > 65 || possuiPatologia === true || altura < 150 ){
    console.log("ACESSO NEGADO")
}else if(ehEstudante === true || idade < 18){
    console.log("10 REAIS")
}else{
    console.log("20 REAIS")
}