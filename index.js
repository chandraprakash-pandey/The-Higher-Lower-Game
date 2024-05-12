let x = 0;
let score = document.querySelector('.num');
score.innerHTML = x;
let vs = document.querySelector(".vs_content");
let higher_click = document.querySelector(".higher");
let lower_click = document.querySelector(".lower");
let right = document.querySelector(".right");
const img_no = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

const img = [
    'Addidas.jpg',
    'Harry-Potter.webp'
]

lower_click.addEventListener("click", function (){
    x++;
    score.innerHTML = x;
    score_pop();
})

function score_pop(){
    let score_ = document.querySelector(".score");
    score_.classList.add("score_pop");
    vs.classList.add("vs_right");
    vs.innerHTML = "🗸"
    setTimeout(function(){
        score_.classList.remove("score_pop");
        vs.classList.remove("vs_right");
        vs.innerHTML = "VS";
    }, 900)

}

higher_click.addEventListener("click", function (){
    vs.classList.add("vs_wrong");
    vs.innerHTML = "X"
    setTimeout(function(){
    vs.classList.remove("vs_wrong");
    vs.innerHTML = "VS"
    }, 900)
})
