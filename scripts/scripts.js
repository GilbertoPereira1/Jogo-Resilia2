var h2_01 = document.getElementById("h2_a")
var h2_02 = document.getElementById("h2_b")
var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")

function startGame() {
    if(iniciarOgame == false){
        clicarNao;
    }else{
        clicarSim();
    }
}

function clicarSim() {
    h2_01.innerHTML = `<img src=./images/pc-gamer.jpg>`
    h2_02.innerHTML = `Todos os seus amigos estão jogando, porém você deve estudar, o que fazer, deseja jogar?`
    botao1.onclick = jogarNoPc
    botao2.onclick = estudar
}

function clicarNao() {
    h2_01.innerHTML = `<img src=./images/gamOver.jpg>`
    h2_02.innerHTML = `Tem certeza que não quer jogar??`
    botao1.onclick = startGame
    botao2.onclick = gameOver
}
  
function jogarNoPc() {
    h2_01.innerHTML = `<img src=./images/amigos.jpg>`
    h2_02.innerHTML = `Você decidiu jogar e no meio depois de algumas partidas seus amigos te chamam pra sair, deseja sair ou não?`
    botao1.onclick = sairSim
    botao2.onclick = sairNao
}

function estudar() {
    h2_01.innerHTML = `<img src=./images/estudar.jpg>`
    h2_02.innerHTML = `Você ficou estudando e seus amigos te chamaram pra sair, porém você precisa descansar, deseja sair ainda ou descansar?`
    botao1.onclick = sairSim
    botao2.onclick = sairNao
}

function sairSim() {
    h2_01.innerHTML = `<img src=./images/role.jpg>`
    h2_02.innerHTML = `Você decidiu sair, mas a prova é amanha, deseja beber com seus amigos?`
    botao1.onclick = beber
    botao2.onclick = naoBeber
}

function naoBeber() {
    h2_01.innerHTML = `<img src=./images/nao-quero-beber.jpg>`
    h2_02.innerHTML = `Você decidiu não beber e voltar mais cedo para casa, deseja estudar para prova?`
    botao1.onclick = estudarSim
    botao2.onclick = estudarNao
}

function estudarNao() {
    h2_01.innerHTML = `<img src=./images/reprovado.jpg>`
    h2_02.innerHTML = `Você foi despreparado para prova e reprovou!`
    botao1.onclick = gameOver
}

function sairNao(){
    h2_01.innerHTML = `<img src=./images/casa.png>`
    h2_02.innerHTML = `Você decidiu não sair, deseja estudar e descansar ou voltar atrás e sair?`
    botao1.onclick = descansar
    botao2.onclick = sairSim
}

function descansar(){
    h2_01.innerHTML = `<img src=./images/casa.png>`
    h2_02.innerHTML = `Você decidiu estudar e descansar e chegou na prova preparado! Deseja saber seu resultado?`
    botao1.onclick = resultadoSim
    botao2.onclick = resultadoSim
}

function beber(){
    h2_01.innerHTML = `<img src=./images/reprovado.jpg>`
    h2_02.innerHTML = `Você bebeu e chegou atrasado na prova, e reprovou!!`
    botao1.onclick = gameOver
}

function resultadoSim(){
    h2_01.innerHTML = `<img src=./images/venceu.jpg>`
    h2_02.innerHTML = `Você fez o que era certo, estou e foi aprovado. Parabéns você venceu!`
    botao1.onclick = startGame
    botao2.onclick = gameOver
}

function estudarSim(){
    h2_01.innerHTML = `<img src=./images/casa.png>`
    h2_02.innerHTML = `Você decidiu ficar em casa, não jogar e estudar, deseja virar a noite estudando ou estudar e descansar?`
    botao1.onclick = virarANoite
    botao2.onclick = descansar
}

function virarANoite(){
    h2_01.innerHTML = `<img src=./images/estudar-a-noite.jpg>`
    h2_02.innerHTML = `Você decidiu virar a noite, porém esta ficando muito cansado, deseja parar e descansar?`
    botao1.onclick = descansar
    botao2.onclick = ficarVirado
}

function ficarVirado(){
    h2_01.innerHTML = `<img src=./images/reprovado.jpg>`
    h2_02.innerHTML = `Você não conseguiu acorda a tempo e perdeu o horario!`
    botao1.onclick = gameOver
}

function gameOver() {
    h2_01.innerHTML = `<img src=./images/gamOver.jpg>`
    h2_02.innerHTML = `Game Over, quer jogar de novo ?`
    botao1.onclick = startGame
    botao2.onclick = startGame
}