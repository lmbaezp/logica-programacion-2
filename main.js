const tempCelsius = document.getElementById('tempCelsius');
const btnsConvertir = document.querySelectorAll('.btn-convertir');
const containerResultado = document.getElementById('resultado');

btnsConvertir.forEach(btn => {
    btn.addEventListener('click', () => {
        containerResultado.value = '';
        console.log(isNaN(tempCelsius.value))

        if (!/^-?\d+(\.\d{1,2})?$/.test(tempCelsius.value.trim())) {
            tempCelsius.classList.add('is-invalid')
        }
        else {
            const inputValue = Number(tempCelsius.value);
            const inputTemperatura = Number.isInteger(inputValue) ? parseInt(inputValue) : parseFloat(inputValue);
            let resultado;
            let escala;
            switch (btn.getAttribute('escala')) {
                case 'farenheit':
                    resultado = (inputTemperatura * 1.8) + 32;
                    escala = 'F';
                    break;
                case 'kelvin':
                    resultado = inputTemperatura + 273, 15;
                    escala = 'K';
                    break;
            }
            containerResultado.value = `${tempCelsius.value}°C = ${resultado}°${escala}`;
            tempCelsius.classList.remove('is-invalid')
        }
    });

});


