// Selecionar elementos
const form = document.getElementById('myForm');
const inputs = document.querySelectorAll('.data');
const errorTexts = document.querySelectorAll('.textoErro');
const btnSend = document.querySelector('.btnSend'); // Seleciona o botão de envio
let flag = false; // Flag para controle de envio

// Função para validar um campo e aplicar classes e texto de erro
function validateField(input, errorText) {
    if (input.value.trim() === '') {
        input.classList.add('redClass');
        errorText.classList.add('mostrar');
        return false;
    } else {
        input.classList.remove('redClass');
        input.classList.add('greenClass');
        errorText.classList.remove('mostrar');
        return true;
    }
}

// Função para validar todos os campos e mostrar mensagem de erro ou sucesso
function validateAllFields() {
    let allFieldsValidated = true;

    inputs.forEach((input, index) => {
        const validated = validateField(input, errorTexts[index]);
        allFieldsValidated = allFieldsValidated && validated;

        if (!validated) {
            input.classList.add('redClass');
            errorTexts[index].classList.add('mostrar');
        }
    });

    if (allFieldsValidated) {
        alert('Form enviado com sucesso!');
        removeValuesAndClasses(inputs); // Limpar campos (opcional)
        flag = true;
    } else {
        alert('Por favor, preencha todos os dados antes de enviar!');
        flag = false;
    }
}

// Evento submit do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita envio padrão
    validateAllFields(); // Validar todos os campos
});

// Evento input para cada campo (opcional)
inputs.forEach((input, index) => {
    input.addEventListener('input', () => validateField(input, errorTexts[index]));
});

// Evento click no botão de envio personalizado
btnSend.addEventListener('click', function (event) {
    event.preventDefault(); // Evita envio padrão
    validateAllFields(); // Validar todos os campos
});

// Função para limpar valores e classes dos campos
function removeValuesAndClasses(inputs) {
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('redClass', 'greenClass');
    });
}
