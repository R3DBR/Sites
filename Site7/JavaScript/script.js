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
        
        let u_angulo = angulo + 90
    }
});




document.addEventListener("click", function (e) {

    let obj_bala = document.createElement("img")
    obj_bala.src = "../etc/bala.png"
    obj_bala.id = "bala_id"
    bala_obj = document.getElementById("bala_id") 

    document.body.appendChild(obj_bala);

    let match = transform.match(/rotate\(([-\d.]+)deg\)/)
    let angle = match ? parseFloat(match[1]) : 0;

    obj_bala.style.position = "absolute"
    obj_bala.style.left = x + "px"
    obj_bala.style.top = y + "px"

})

let mover = setInterval(() => {
    x += Math.cos(angulo * Math.PI / 180) * 10;
})