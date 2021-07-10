const form = document.querySelector('.form');

// função feita para evitar o reset de pagina do botão, receber os valores e caso valor seja incompativel, mostrar um erro

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('.peso');
    const inputAltura = event.target.querySelector('.altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso incorreto', false);
        return;
    }
    if (!altura) {
        setResultado('Altura incorreta', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

// Função criada para realizar o calculo do IMC

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Chama o resultado de calculo do IMC e diz em qual faixa o usuario está

function getNivelImc(imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade drau 2',
        'Obesidade grade 3'
    ];

    if (imc >= 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];

    if (imc >= 18.5) return nivel[1];

    if (imc < 18.5) return nivel[0];
}

// Função criada apenas para criar novos paragrafos

function criaP() {
    const p = document.createElement('p');

    return p;
}

//função feita para receber os resultados e mostrar na página

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ''; //zera o HTML
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}