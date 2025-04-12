obj_btn = document.getElementById("button_id");
obj_dice = document.getElementById("dado_id");


let spd = 0
if (spd <= 0) {
    spd = 0
}
else {
    spd -= 10
}


dice_imgs = ["../etc/1.jpg", "../etc/2.jpg", "../etc/3.jpg", "../etc/4.jpg", "../etc/5.jpg", "../etc/6.jpg"];


obj_btn.addEventListener("click", function() {

    let count = 0

    const interval = setInterval(function() {
        let idx = Math.floor(Math.random() * 6);

        obj_dice.src = dice_imgs[idx]
        count++;

        if (count >= 10) {
            clearInterval(interval)
            obj_btn.style.top = 180 + "px"
        }

    }, 150);


    obj_btn.style.top = 10000 + "px"


})