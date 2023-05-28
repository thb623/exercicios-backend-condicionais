//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 18;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1900000;

const valorParcela = (18 / 100) * 300000 / 100
if(rendaMensalEmCentavos < 200000){
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
}else if(mesesDecorridos > 60){
    console.log("O aluno nao deve mais nada devido ao tempo decorrido do contrato ser superior a 60 meses")
}else if(totalJaPagoPeloAluno > 1800000){
    console.log("O aluno já nao deve mais nada por ter pago o valor total de 18 mil reais.")
}
else{
    console.log(`O valor da parcela desse mês é R$${valorParcela}`)
}