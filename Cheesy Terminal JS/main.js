const tela=document.getElementById("tela");
var cons = "";
var input = "";
var lista = [];
document.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        input = cons;
        logTela(input);
        if(input === "date") {
            var hoje = new Date();
            logTela(`Hoje é ${hoje.getDay()}/${hoje.getMonth()}/${hoje.getFullYear()}`);
        }
        if(/^list push/.test(input)) {
            rEx = /(^list push)(.*)/
            match = input.match(rEx);
            lista.push(match[2]);
            logTela(lista);
        }
        if(/^list show/.test(input)) {
            logTela(lista);
        }
        if(/^list size/.test(input)) {
            logTela(lista.length);
        }
        if(/^list clear/.test(input)) {
            lista = [];
        }
        if(input === "cls") {
            limpaTela();
        } else {
            rEx = /(\d+)(\D)(\d+)/
            match = input.match(rEx);
            if(match[2] == "+") {
                logTela(soma(parseFloat(match[1]),parseFloat(match[3])))
            }
            if(match[2] == "*") {
                logTela(mult(parseFloat(match[1]),parseFloat(match[3])))
            }
            if(match[2] == "/") {
                if(match[3] != 0) {
                    logTela(divi(parseFloat(match[1]),parseFloat(match[3])))
                } else {
                    logTela("Impossível dividir por Zero!")
                }
            }
            if(match[2] == "-") {
                logTela(sub(parseFloat(match[1]),parseFloat(match[3])))
            }
        }
    } else {
        cons = cons + `${event.key}`
        document.getElementById("term").textContent = cons
    }
})

function logTela(texto) {
    var novaLinha=document.createElement("p");
    var node=document.createTextNode(texto);
    novaLinha.appendChild(node);
    tela.appendChild(novaLinha);
    cons = ""
    document.getElementById("term").textContent = cons
    window.scrollTo(0, document.body.scrollHeight);
}

function limpaTela() {
    tela.innerHTML = "";
}

function soma(a,b) {
    return a+b;
}

function mult(a,b) {
    return a*b;
}

function divi(a,b) {
    return a/b;
}

function sub(a,b) {
    return a-b;
}