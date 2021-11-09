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
        
        const i = jurus;
        const n = parcelas;
        const situacao = "";
        
        const PV = (preco - entrada).toFixed(2);
        
        const PMT = PV * (((1 + i) ** n * i) / ((1 + i) ** n - 1));
        
        const ValorMaximo = (30/100) * salario;
        
        if (PMT <= ValorMaximo) {
            situacao = "Aprovado";
            
        }else{
            situacao = "Recusado";
        }


        resultado.textContent = `Olá ${nome}! O valor ${PV} foi parcelado em ${parcelas} parcelas com ${jurus}% de jurus, resultando em R$ ${PMT} por parcela. Tendo em vista o seu salario de R$ ${salario} e o seu limite de R$ ${ValorMaximo} para cada parcela, o seu financiamento foi ${situacao}!`;

    }else {
        resultado.textContent = 'ERRO! Por favor preencha todos os campos!';
    }

}


calcular.addEventListener('click', processing);
