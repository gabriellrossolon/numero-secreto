function verificaSeChuteValido() {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Invalido! Fale apenas numeros</div>'
    }

    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor Invalido! O numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto} :)</h3>

            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})
