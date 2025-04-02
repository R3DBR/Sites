let obj_o = document.getElementById("id_o")

let vspd = 5
let hspd = 5
let posX = 0
let posY = 0


let janela_l = document.documentElement.clientWidth;
let janela_a = document.documentElement.clientHeight;
let obj_l = obj_o.offsetWidth;
let obj_a = obj_o.offsetHeight;



function atualizar() {
    posX += hspd;
    posY += vspd;

    obj_o.style.position = "absolute";
    obj_o.style.left = posX + "px";
    obj_o.style.top = posY + "px";



    if (posX <= 0 || posX + obj_o.clientWidth >= janela_l) {
        hspd *= -1;
    }
    
    if (posY <= 0 || posY + obj_o.clientHeight >= janela_a) {
        vspd *= -1;
    }



    requestAnimationFrame(atualizar);
}



atualizar();