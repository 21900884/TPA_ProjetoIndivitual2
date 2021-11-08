const calcular = document.getElementById('calcular');


function processing() {
    const nome = document.getElementById('nome').value;
    const tempoH = document.getElementById('tempoH').value;
    const tempoMin = document.getElementById('tempoMin').value;
    const tempoS = document.getElementById('tempoS').value;
    const distancia = document.getElementById('distancia').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (tempoH !== '' && tempoMin !== '' && tempoS !== '' && peso !== '' && distancia !== '') {

        const tempoTotalS = ( (tempoH * 3600) + (tempoMin * 60) + (tempoS) );

        const pace = ( (tempoTotalS / 60) / distancia ).toFixed(2);
        
        const velocidade = (distancia / (tempoTotalS / 3600)).toFixed(2);
        
        const caloria = ( velocidade * (peso * 0.0175) * (tempoTotalS / 60) ).toFixed(2);


        resultado.textContent = `Olá ${nome}! Você percorreu ${distancia} km em ${tempoH} h, ${tempoMin} min e ${tempoS} s. Isso quer dizer que a sua velocidade média foi de ${velocidade} km/h, o que o corresponde a um pace de ${pace} min/km. Com ${peso} kg, você gastou cerca de ${caloria} cal .`;

    }else {
        resultado.textContent = 'ERRO! Por favor preencha todos os campos!';
    }

}


calcular.addEventListener('click', processing);
