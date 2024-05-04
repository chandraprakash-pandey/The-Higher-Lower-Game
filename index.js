let x = 0;
let score = document.querySelector('.num');
score.innerHTML = x;
let vs = document.querySelector(".vs_content");
let higher_click = document.querySelector(".higher");
let lower_click = document.querySelector(".lower");

let arr_img = [];

lower_click.addEventListener("click", function (){
    x++;
    score.innerHTML = x;
    score_pop();
})

function score_pop(){
    let score_ = document.querySelector(".score");
    score_.classList.add("score_pop");
    vs.classList.add("vs_right");
    setTimeout(function(){
        score_.classList.remove("score_pop");
        vs.classList.remove("vs_right");
    }, 600)

}

higher_click.addEventListener("click", function (){
    vs.classList.add("vs_wrong");
    setTimeout(function(){
    vs.classList.remove("vs_wrong");
    }, 600)
})