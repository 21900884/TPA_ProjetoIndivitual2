const calcular = document.getElementById('calcular');


function processing() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const salario = document.getElementById('salario').value;
    const entrada = document.getElementById('entrada').value;
    const jurus = document.getElementById('jurus').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');
    
    
    window.alert(nome);
    window.alert(preco);
    window.alert(salario);
    window.alert(entrada);
    window.alert(jurus);
    window.alert(parcelas);
    
    
    
    
    window.alert("Testehufg27267");

    if (preco !== '' && salario !== '' && entrada !== '' && jurus !== '' && parcelas !== '') {
        
        window.alert("2");
        
        var i = jurus;
        var n = parcelas;
        var situacao = "";
        var PV = 0;
        var PMT = 0;
        var ValorMaximo = 0;
        
        window.alert("Teste");
        
        PV = (preco - entrada).toFixed(2);
        
        window.alert("Teste2");
        window.alert(PV);
        
        PMT = PV * (((1 + i) ** n * i) / ((1 + i) ** n - 1)).toFixed(2);
        
        window.alert("Teste3");
        window.alert(PMT);
        
        ValorMaximo = (30/100) * salario.toFixed(2);
        
        window.alert("Teste4");
        window.alert(ValorMaximo);
        
        const X = 1+1;
        
        if (PMT <= ValorMaximo) {
            situacao = "Aprovado";
            
        }else{
            situacao = "Recusado";
        }

        
        window.alert(X);
        
        resultado.textContent = `Olá ${nome}! O valor ${PV} foi parcelado em ${parcelas} parcelas com ${jurus}% de jurus, resultando em R$ ${PMT} por parcela. Tendo em vista o seu salario de R$ ${salario} e o seu limite de R$ ${ValorMaximo} para cada parcela, o seu financiamento foi ${situacao}!`;

    }else {
        resultado.textContent = 'ERRO! Por favor preencha todos os campos!';
    }

}


calcular.addEventListener('click', processing);
