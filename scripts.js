const campoDesafio = document.querySelector(".campoDesafio");
const campoResposta = document.querySelector("#resposta");
const btnNovoDesafio = document.querySelector(".btnEnviar");
const campoFeedback = document.querySelector("#feedback");

let primeiroNumero;
let segundoNumero;
let respostaCorreta;
let respostaDoUsuario;

function desafio() {
  primeiroNumero = Math.floor(Math.random() * 10) + 1;
  segundoNumero = Math.floor(Math.random() * 10) + 1;
  respostaCorreta = primeiroNumero * segundoNumero;

  campoDesafio.textContent = `${primeiroNumero} x ${segundoNumero}`;
  campoResposta.value = '';
  campoResposta.focus();
}

function checarResposta() {
  respostaDoUsuario = Number(campoResposta.value);
  if (respostaCorreta === respostaDoUsuario) {
    campoFeedback.textContent = "Você acertou!! Parabéns!!";
  } else {
    campoFeedback.textContent = "Você errou!! Continue se esforçando!!";
  }
  desafio();  
}
desafio();
btnNovoDesafio.addEventListener("click", checarResposta);