const calcular = document.getElementById('calcular');


function processing() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const salario = document.getElementById('salario').value;
    const entrada = document.getElementById('entrada').value;
    const jurus = document.getElementById('jurus').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');
    
    
    if (preco !== '' && salario !== '' && entrada !== '' && jurus !== '' && parcelas !== '') {

        var i = jurus;
        var n = parcelas;
        var situacao = "";
        var PV = 0;
        var PMT = 0;
        var ValorMaximo = 0;
        var valorParcela = 0;

        PV = (preco - entrada).toFixed(2);

        PMT = PV * (((1 + i) ** n * i) / ((1 + i) ** n - 1)).toFixed(2);

        ValorMaximo = ((30/100) * salario).toFixed(2);
        
        valorParcela = (PMT / parcelas).toFixed(2);

        if (valorParcela <= ValorMaximo) {
            situacao = "Aprovado";
            
        }else{
            situacao = "Recusado";
        }

        resultado.textContent = `Olá ${nome}! O valor ${PV} foi parcelado em ${parcelas} parcelas com ${jurus}% de jurus, resultando em um valor total de R$ ${PMT} e R$ ${valorParcela} por parcela. Tendo em vista o seu salario de R$ ${salario} e o seu limite de R$ ${ValorMaximo} para cada parcela, o seu financiamento foi ${situacao}!`;

    }else {
        resultado.textContent = 'ERRO! Por favor preencha todos os campos!';
    }

}


calcular.addEventListener('click', processing);
