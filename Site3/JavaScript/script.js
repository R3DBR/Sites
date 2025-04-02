let obj_btn = document.getElementById("btn")
let vel = 0
let posX = 50
let move = false


document.getElementById("btn").addEventListener("click", function(){
    var msg = document.getElementById("msg").value
    alert("Voce digitou: " + msg)
})


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        vel = -2
    }
    else if (event.key === "ArrowRight") {
        vel = +2
    }

    move = true

})

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        vel = 0
        move = false
    }
    
}) 


function atualizar() {
    if (move) {
        posX += vel;
        obj_btn.style.position = "absolute";
        obj_btn.style.left = posX + "%";    
    }
    requestAnimationFrame(atualizar)
}

atualizar();

