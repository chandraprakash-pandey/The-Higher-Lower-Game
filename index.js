let x = 0;
let score = document.querySelector('.num');
score.innerHTML = x;

let higher_click = document.querySelector(".higher");
let lower_click = document.querySelector(".lower");


lower_click.addEventListener("click", function (){
    x++;
    score.innerHTML = x;
})
