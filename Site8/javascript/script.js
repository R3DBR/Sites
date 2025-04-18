let obj_texto = document.getElementById("nome_id");
let obj_texto2 = document.getElementById("numero_id");
let obj_texto3 = document.getElementById("email_id");
let obj_texto4 = document.getElementById("genero_id");
let obj_texto5 = document.getElementById("idade_id");
let obj_texto6 = document.getElementById("civil_id");
let obj_texto7 = document.getElementById("membro_id");
let obj_texto8 = document.getElementById("esc_id");
let obj_texto9 = document.getElementById("batizado_id");
let obj_texto10 = document.getElementById("tempo_id");
let obj_texto11 = document.getElementById("ministerio_id");
let obj_texto12 = document.getElementById("setor_id");
let obj_texto13 = document.getElementById("pergunta_id");

let obj_btn = document.getElementById("feito1_id");


function enviarEmail(){
    const nome = obj_texto.value.trim() !== "";
    const numero = obj_texto2.value.trim() !== "";
    const email = obj_texto3.value.trim() !== "";
    const genero = obj_texto4.value.trim() !== "" && obj_texto4.value !== null;
    const idade = obj_texto5.value.trim() !== "";
    const civil = obj_texto6.value.trim() !== "" && obj_texto6.value !== null;
    const membro = obj_texto7.value.trim() !== "";
    const esc = obj_texto8.value.trim() !== "";   
    const batizado = obj_texto9.value.trim() !== "";
    const tempo = obj_texto10.value.trim() !== "";
    const ministerio = obj_texto11.value.trim() !== "";
    const setor = obj_texto12.value !==null && obj_texto12.value.trim() !== "";
    const perg = obj_texto13.value.trim() !== "";


    if (nome && numero && email && genero && idade && civil && membro && esc && batizado && tempo && ministerio && setor && perg) {
        obj_btn.classList.remove("btof");
        obj_btn.classList.add("bton");
        obj_btn.disabled = false;
    }
    else {
        obj_btn.classList.remove("bton");
        obj_btn.classList.add("btof");
        obj_btn.disabled = true;
    }
}


obj_texto.addEventListener("input", enviarEmail);
obj_texto2.addEventListener("input", enviarEmail);
obj_texto3.addEventListener("input", enviarEmail);
obj_texto4.addEventListener("change", enviarEmail);
obj_texto5.addEventListener("input", enviarEmail);
obj_texto6.addEventListener("change", enviarEmail);
obj_texto7.addEventListener("input", enviarEmail);
obj_texto8.addEventListener("input", enviarEmail);
obj_texto9.addEventListener("change", enviarEmail);
obj_texto10.addEventListener("input", enviarEmail);
obj_texto11.addEventListener("input", enviarEmail);
obj_texto12.addEventListener("input", enviarEmail);
obj_texto13.addEventListener("input", enviarEmail);


window.addEventListener("load", enviarEmail);





obj_btn.addEventListener("click", function() {

    if (obj_btn.className == "btof") {
        alert("Preencha todos os campos corretamente antes de enviar.");
        return;
    }
    else {
        let text = obj_texto.value;
        let text2 = obj_texto2.value;
        let text3 = obj_texto3.value;
        let text4 = obj_texto4.value;
        let text5 = obj_texto5.value;
        let text6 = obj_texto6.value;
        let text7 = obj_texto7.value;
        let text8 = obj_texto8.value;
        let text9 = obj_texto9.value;
        let text10 = obj_texto10.value;
        let text11 = obj_texto11.value;
        let text12 = obj_texto12.value;
        let text13 = obj_texto13.value;
    

        let mensagem = "Nome: " + text + "\nNúmero: " + text2 + "\nEmail: " + text3 + "\nGênero: " + text4 + "\nIdade: " + text5 + "\nEstado Civil: " + text6 + "\nMembro: " + text7 + "\nEscola: " + text8 + "\nBatizado: " + text9 + "\nTempo de Batismo: " + text10 + "\nMinistério: " + text11 + "\nSetor: " + text12 + "\nPergunta: " + text13;
        
        emailjs.send("service_mt65uxc", "template_6kajdo8", {
            email: "tcartaxo30@gmail.com",
            nome: text,
            message: mensagem
        })
        .then(function(response) {
            alert("Email enviado com sucesso! " + response.status + " " + response.text);
        }, function(error) {
            alert("Erro ao enviar o email: " + JSON.stringify(error));
        });

    }
});

//////



