let obj_btn = document.getElementById("btn_id");
let obj_cont = document.getElementById("cont_id");
let obj_player = document.getElementById("player_id");

let escala = 1
obj_btn.addEventListener("click", function() {

    let intervalo = setInterval(function() {
        if (escala > 0.01) {
            escala -= 0.01
            obj_cont.style.transform = 'scale(' + escala + ')';
        }
        else if (escala <= 0.1){
            clearInterval(intervalo);
            obj_cont.style.display = 'none';
        }
    }, 10);
})

setInterval(function () {
    if (obj_cont.style.display === "none") {
        obj_player.style.display = "block";
    }
}, 300)

document.addEventListener("mousemove", function (e) {
    if (obj_cont.style.display == "none") {
        let x = e.clientX;
        let y = e.clientY;

        let rect = obj_player.getBoundingClientRect();
        let centro_x = rect.left + rect.width / 2;
        let centro_y = rect.top + rect.height / 2;

        let dx = x - centro_x;
        let dy = y - centro_y;

        let raio = Math.atan2(dy, dx);
        let angulo = raio * (180 / Math.PI);

        obj_player.style.transform = `translate(-50%, -50%) rotate(${angulo + 90}deg)`;
    }
});



document.addEventListener("click", function (e) {
    if (obj_cont.style.display !== "none") return;

    let obj_bala = document.createElement("img");
    obj_bala.src = "../etc/bala.png";
    obj_bala.style.width = "20px";
    obj_bala.style.position = "absolute";

    document.body.appendChild(obj_bala);

    let mover = setInterval(() => {
        bala_x += Math.cos(rad) * 10;
        bala_y += Math.sin(rad) * 10;
        obj_bala.style.left = bala_x + "px";
        obj_bala.style.top = bala_y + "px";
    
        if (bala_x < 0 || bala_y < 0 || bala_x > window.innerWidth || bala_y > window.innerHeight) {
            clearInterval(mover);
            obj_bala.remove();
        }
    }, 16)
    
});