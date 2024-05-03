let x = 0;
let score = document.querySelector('.num');
score.innerHTML = x;

let higher_click = document.querySelector(".higher");
let lower_click = document.querySelector(".lower");

lower_click.addEventListener("click", function (){
    x++;
    score.innerHTML = x;
    score_pop();
})

function score_pop(){
    let score_ = document.querySelector(".score");
    score_.classList.add("score_pop");
    setTimeout(function(){
        score_.classList.remove("score_pop");
    }, 300)
}