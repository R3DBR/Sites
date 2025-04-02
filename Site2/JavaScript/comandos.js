
let num = 0;

if(localStorage.getItem("num")) {
    num = parseInt(localStorage.getItem("num"));
    document.getElementById("titulo_id").innerText = num;
}

document.getElementById("titulo_id").addEventListener("click", function() {
    num++;
});


document.getElementById("reset_id").addEventListener("click", function(){
    num = 0;
})


document.getElementById("mais_id").addEventListener("click", function(){
    num++;
})

document.getElementById("menos_id").addEventListener("click", function(){
    num--;
})


setInterval(() => {
    document.getElementById("titulo_id").innerText = num;
    localStorage.setItem("num", num)
    console.log("Salvo")
}, 1);




let segundos = 0
segundos = localStorage.getItem('segundos')

document.getElementById("msg").innerText = segundos;

function iniciarContagem() {

    setInterval(() => {
        segundos++;
        localStorage.setItem('segundos', segundos)
        document.getElementById("msg").innerText = segundos
    },1000)
 
}

iniciarContagem();

