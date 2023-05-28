//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito ou dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000 / 100;

if(tipoDePagamento === "credito"){
    const valorFinal = valorDoProduto - (valorDoProduto * 0.05)
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
}else if(tipoDePagamento === "cheque"){
    const valorFinal = valorDoProduto - (valorDoProduto * 0.03)
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
}else if(tipoDePagamento === "debito ou dinheiro"){
    const valorFinal = valorDoProduto - (valorDoProduto * 0.10)
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
}
