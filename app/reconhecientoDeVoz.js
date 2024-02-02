const elementoChute = document.getElementById('chute');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(numeroFalado) {
    chute = numeroFalado.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeChuteValido(chute)
}

function exibeChuteNaTela() {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

  






