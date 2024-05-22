let x = 0;
let score = document.querySelector('.num');
let vs = document.querySelector(".vs_content");
let higher_click = document.querySelector(".higher");
let lower_click = document.querySelector(".lower");
let right_img = document.querySelector(".right");
let left_img = document.querySelector(".left");

const group = [
    {name: '"Outlook"', searches: 68000000, images: 'Images/Outlook.webp'},
    {name: '"News"', searches: 16000000, images: 'Images/News.webp'},
    {name: '"Cleaner"', searches: 1220000, images: 'Images/Cleaner.webp'},
    {name: '"Twitter"', searches: 83100000, images: 'Images/Twitter'},
    {name: '"New York"', searches: 2240000, images: 'Images/New York'},
    {name: '"Serena Williams"', searches: 1830000, images: 'Images/Serena Williams.webp'},
    {name: '"Toyota"', searches: 6120000, images: 'Images/Toyota.webp'},
    {name: '"Katy Perry"', searches: 4090000, images: 'Images/Katy Perry.webp'},
    {name: '"Popeye"', searches: 1830000, images: 'Images/Popeye.webp'},
    {name: '"Black Hole"', searches: 368000, images: 'Images/Black Hole.webp'},
    {name: '"Angry Birds"', searches: 9140000, images: 'Images/.webp'},
    {name: '"Periodic Table"', searches: 3350000, images: 'Images/.webp'},
    {name: '"Lego"', searches: 6120000, images: 'Images/.webp'},
    {name: '"American Beauty"', searches: 368000, images: 'Images/.webp'},
    {name: '"Bangkok"', searches: 1000000, images: 'Images/.webp'},
    {name: '"John Cena"', searches: 2240000, images: 'Images/.webp'},
    {name: '"fruit Ninja"', searches: 1500000, images: 'Images/.webp'},
    {name: '"Queen Victoria"', searches: 823000, images: 'Images/.webp'},
    {name: '"Nelson Mandela"', searches: 1000000, images: 'Images/.webp'},
    {name: '"Instagram"', searches: 151000000, images: 'Images/.webp'},
    {name: '"Alcohol"', searches: 673000, images: 'Images/.webp'},
];

score.innerHTML = x;

console.log(group[0].images);

right_img.style.backgroundImage = `url("${group[0].images}")`;


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
