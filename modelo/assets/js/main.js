function calculoIMC() {
    const form = document.querySelector('.form');
    const resultadoPeso = document.querySelector('.resultado-peso');
    const resultadoImc = document.querySelector('.resultado-imc');
    const imc = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        let calcImc = peso * (altura / altura);

        imc.push({
            peso: peso.value,
            altura: altura.value,
            calcImc: calcImc.value
        });

        if (calcImc >= 18.5) {
            resultadoPeso.innerHTML = 'Você está abaixo do peso';
        } else if (calcImc >= 19 && calcImc <= 24.9) {
            resultadoPeso.innerHTML = 'Você está no peso normal, parabéns!';
        } else if (calcImc >= 25 && calcImc <= 29.9) {
            resultadoPeso.innerHTML = 'Você está com sobrepeso';
        } else if (calcImc >= 30 && calcImc <= 34.9) {
            resultadoPeso.innerHTML = 'Você está com Obesidade 1';
        } else if (calcImc >= 35 && calcImc <= 39.9) {
            resultadoPeso.innerHTML = 'voce está com Obesidade 2';
        } else if ((calcImc = 40 && calcImc <= 80)) {
            resultadoPeso.innerHTML = 'Voce esta com obesidade 3';
        }

        resultadoImc.innerHTML = `${calcImc.value}`;
        console.log(imc);
    }

    form.addEventListener('submit', recebeEventoForm);
}

calculoIMC();