
import BotaoConclui from './components/botaoConclui.js'
import BotaoDeleta from './components/botaoDeleta.js'

    function  criarTarefa(evento){
        
        evento.preventDefault();

        const input = document.querySelector("[data-form-input]");
        const valor = input.value;
        input.value = "";
        
        // este elemento é a tag ul no html
        const lista = document.querySelector("[data-list]");
        
        // criando a tag li no html
        const tarefa = document.createElement("li");

        // herdando a classe task
        tarefa.classList.add("task");
        
        // conteudo corresponde ao elemento p
        const conteudo = `<p class="content">${valor}</p>`;
        conteudo.classList.add("content");

        // recebendo a classe content
        conteudo.classList.add("content");
        
        tarefa.innerText = conteudo;
        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa);
        
    }
    // botao novo item
    const botaoInclui = document.querySelector("[data-form-button]");
        botaoInclui.addEventListener("click", criarTarefa);


    
    