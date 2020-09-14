//Игра Квиддич

let kvidich = document.querySelector(".kvidich")
var coef = 0;

let goKvidich = function() {
    coef = Math.random() * 900;
    var stepTop = Math.random() * 900 + "px";
    var stepRight = Math.random() * 900 + "px";
    if (coef < 1000) {
        kvidich.style.marginTop = stepTop;
        kvidich.style.marginLeft = stepRight;
    }
}

let timeToGo = function() {
    setTimeout(goKvidich, 200)
}

kvidich.addEventListener("mouseenter", timeToGo)

let ball = document.querySelector(".ball img");
ball.addEventListener('click', catchKvidich);

function catchKvidich() {
    this.classList.add("catch");
    goKvidich = null;
}