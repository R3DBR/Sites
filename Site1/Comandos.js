function pegar_resposta() {
    var resposta = prompt("Digite a resposta");
    if (resposta == "Bem-vindo/a"){
        window.location.href = "Fase2.html"
    }
    else if (resposta == "De nada"){
        window.location.href = "Fase2.html"
    }
    else if (resposta == "Esta indo bem"){
        window.location.href = "Rule43.html"
    }
    else if (resposta == "Rule43")
    {
        window.location.href = "../pag_central.html"
    }
    else{
        alert("Não")
    }
}


