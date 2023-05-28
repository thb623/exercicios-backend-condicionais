//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorReais = (valorDoProduto / 100) - valorPago
const parcelas = (valorReais / 10) / quantidadeDoParcelamento
const valorDevido = valorReais / parcelas

if(valorPago === 1000){
    console.log("O produto já foi pago totalmente")
}else{
    console.log(`Restam ${parcelas} parcelas de R$ ${valorDevido} reais.`)
}