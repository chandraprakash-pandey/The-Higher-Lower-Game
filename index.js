let y = 0;
let x = 0;
let score = document.querySelector('.num');
let vs = document.querySelector(".vs_content");
let higher_click = document.querySelector(".higher");
let lower_click = document.querySelector(".lower");
let right_img = document.querySelector(".right");
let left_img = document.querySelector(".left");

let Play_again = document.querySelector(".playagain");
let main = document.querySelector(".main");
let score1 = document.querySelector(".num1");
let Highscore = document.querySelector(".highscore");
let check = document.querySelector(".check");
let vswala = document.querySelector(".vs");
let gameover = document.querySelector(".gameover");
let group_dublicate;
let group_dub;

let random_num1, random_num2;
let value_img_1, value_img_2;

let group = [
    {name: '"Outlook"', searches: 68000000, images: 'Images/Outlook.webp'},
    {name: '"News"', searches: 16000000, images: 'Images/News.webp'},
    {name: '"Cleaner"', searches: 1220000, images: 'Images/Cleaner.webp'},
    {name: '"Twitter"', searches: 83100000, images: 'Images/Twitter.webp'},
    {name: '"New York"', searches: 2240000, images: 'Images/New York.webp'},
    {name: '"Serena Williams"', searches: 1830000, images: 'Images/Serena Williams.webp'},
    {name: '"Toyota"', searches: 6120000, images: 'Images/Toyota.webp'},
    {name: '"Katy Perry"', searches: 4090000, images: 'Images/Katy Perry.webp'},
    {name: '"Popeye"', searches: 1830000, images: 'Images/Popeye.webp'},
    {name: '"Black Hole"', searches: 368000, images: 'Images/Black Hole.webp'},
    {name: '"Angry Birds"', searches: 9140000, images: 'Images/Angry Bird.webp'},
    {name: '"Periodic Table"', searches: 3350000, images: 'Images/Periodic Table.webp'},
    {name: '"Lego"', searches: 6120000, images: 'Images/Lego.jpg'},
    {name: '"American Beauty"', searches: 368000, images: 'Images/American Beauty.webp'},
    {name: '"Bangkok"', searches: 1000000, images: 'Images/Bangkok.webp'},
    {name: '"John Cena"', searches: 2240000, images: 'Images/John Cena.webp'},
    {name: '"fruit Ninja"', searches: 1500000, images: 'Images/fruit Ninja.webp'},
    {name: '"Queen Victoria"', searches: 823000, images: 'Images/Queen Victoria.webp'},
    {name: '"Nelson Mandela"', searches: 1000000, images: 'Images/Nelson Mandela.webp'},
    {name: '"Instagram"', searches: 151000000, images: 'Images/Instagram.jpg'},
    {name: '"Alcohol"', searches: 673000, images: 'Images/Alcohol.webp'},
];

group_dublicate = JSON.parse(JSON.stringify(group));

vswala.innerHTML = "VS";

score.innerHTML = x;

function leftwala(){
random_num1 = Math.floor(Math.random()*group_dublicate.length);
// group_dublicate = group;
left_img.style.backgroundImage = `url("${group_dublicate[random_num1].images}")`;
left_img.querySelector("h1").innerHTML = group_dublicate[random_num1].name;
left_img.querySelector(".marks").innerHTML = group_dublicate[random_num1].searches;
group_dublicate.splice(random_num1, 1);
value_img_1 = group_dublicate[random_num1].searches;
}

function left_to_right(){
    random_num2 = Math.floor(Math.random()*group_dublicate.length);
    right_img.style.backgroundImage = `url("${group_dublicate[random_num2].images}")`;
    right_img.querySelector("h1").innerHTML = group_dublicate[random_num2].name;
    group_dub = group_dublicate[random_num2];
    value_img_2 = group_dublicate[random_num2].searches;
}
leftwala();
left_to_right();

lower_click.addEventListener("click", function (){
    if(value_img_1>=value_img_2){
        left_img.style.backgroundImage = `url("${group_dub.images}")`;
        left_img.querySelector("h1").innerHTML = group_dub.name;
        left_img.querySelector(".marks").innerHTML = group_dub.searches;
        value_img_1 = group_dub.searches;
        group_dublicate.splice(random_num2,1);
        x++;
        score.innerHTML = x;
        score_pop();
        left_to_right();
    }
    else {
        vs.classList.add("vs_wrong");
        vswala.innerHTML = "X";
        group_dublicate = group;
        setTimeout(function(){
            vs.classList.remove("vs_wrong");
            main.style.display = "none";
            gameover.style.display = "flex";
            if(x>=y){
                y = x;
            }
            score1.innerHTML = x;
            Highscore.innerHTML = Math.max(x,y);
        }, 900)
    }
})

higher_click.addEventListener("click", function (){
    if(value_img_1<=value_img_2){
        left_img.style.backgroundImage = `url("${group_dub.images}")`;
        left_img.querySelector("h1").innerHTML = group_dub.name;
        left_img.querySelector(".marks").innerHTML = group_dub.searches;
        value_img_1 = group_dub.searches;
        group_dublicate.splice(random_num2,1);
        x++;
        score.innerHTML = x;
        score_pop();
        left_to_right();

    }
    else {
        vs.classList.add("vs_wrong");
        vswala.innerHTML = "X";
        group_dublicate = group;
        setTimeout(function(){
            vs.classList.remove("vs_wrong");
            main.style.display = "none";
            gameover.style.display = "flex";
            if(x>=y){
                y = x;
            }
            score1.innerHTML = x;
            Highscore.innerHTML = Math.max(x,y);
            }, 900)
    }
})


function score_pop(){
    let score_ = document.querySelector(".score");
    score_.classList.add("score_pop");
    vs.classList.add("vs_right");
    vswala.style.display = "none"
    check.style.display = "inline";
    setTimeout(function(){
        score_.classList.remove("score_pop");
        vs.classList.remove("vs_right");
        vswala.style.display = "block";
        check.style.display = "none";
    }, 900)
    
}

Play_again.addEventListener("click", function (){
    document.querySelector(".main").style.display = "block";
    group_dublicate = JSON.parse(JSON.stringify(group));
    x = 0;
    score.innerHTML = x;
    leftwala();
    left_to_right();
    vswala.innerHTML = "VS";
})
