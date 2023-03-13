// botao concluir
function BotaoConclui(){

    const botaoConclui = document.createElement("button");  
    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "concluir"
    botaoConclui.addEventListener("click", concluirTarefa)
        
    return botaoConclui
    
    }

function concluirTarefa(evento){

    const finalizaTarefa = evento.target;
    const tarefaCompleta = finalizaTarefa.parentElement;
    tarefaCompleta.classList.toggle("done")
}
export default BotaoConclui;