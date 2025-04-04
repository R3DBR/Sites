
let obj_nao = document.getElementById("nao")
const alt = window.innerHeight
const larg = window.innerWidth



obj_nao.addEventListener("mouseover", function() {
   
    let r_a = Math.random() * alt
    let r_l = Math.random() * larg


    obj_nao.style.position = "absolute"
    obj_nao.style.top = r_a + "px"
    obj_nao.style.left = r_l + "px"

})

obj_nao.addEventListener('click', function(){
    rep()
})

function rep() {
    alert("Voce não pode me clicar!")
    rep()
}



