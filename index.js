let x = 0;
let score = document.querySelector('.num');
let vs = document.querySelector(".vs_content");
let higher_click = document.querySelector(".higher");
let lower_click = document.querySelector(".lower");
let right = document.querySelector(".right");

const group = [
    {name: '"Outlook"', searches: 68000000},
    {name: '"News"', searches: 16000000},
    {name: '"Cleaner"', searches: 1220000},
    {name: '"Twitter"', searches: 83100000},
    {name: '"New York"', searches: 2240000},
    {name: '"Serena Williams"', searches: 1830000},
    {name: '"Toyota"', searches: 6120000},
    {name: '"Katy Perry"', searches: 4090000},
    {name: '"Popeye"', searches: 1830000},
    {name: '"Black Hole"', searches: 368000},
    {name: '"Angry Birds"', searches: 9140000},
    {name: '"Periodic Table"', searches: 3350000},
    {name: '"Lego"', searches: 6120000},
    {name: '"American Beauty"', searches: 368000},
    {name: '"Bangkok"', searches: 1000000},
    {name: '"John Cena"', searches: 2240000},
    {name: '"ruit Ninja"', searches: 1500000},
    {name: '"Queen Victoria"', searches: 823000},
    {name: '"Nelson Mandela"', searches: 1000000},
    {name: '"Instagram"', searches: 151000000},
    {name: '"Alcohol"', searches: 673000},
];

console.log(group[0].name);

let left_img = document.querySelector(".left");
let right_img = document.querySelector(".right");

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
