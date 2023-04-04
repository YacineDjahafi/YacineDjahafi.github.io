// bannière fixe
// let banner = document.getElementById("fixed-head");

// banner.style.display = "none";
//    // mettre transition
// document.addEventListener("scroll", function(){ 
//     if (document.documentElement.scrollTop > 1000){
//     banner.style.display = "block"}
//     else 
//     banner.style.display = "none"
// });

let cita0, cita1, cita2, cita3, cita4, cita5, cita6;
cita0 = "L'enseignement de l'informatique ne peut faire de personne un programmeur expert plus que l'étude des pinceaux et du pigment peut faire de quelqu'un un peintre expert."+`"`+ " - Eric S. Raymond";
cita1 = '"'+"Comme la Hongrie, le monde informatique a une langue qui lui est propre. Mais il y a une différence. Si vous restez assez longtemps avec des Hongrois, vous finirez bien par comprendre de quoi ils parlent."+`"`+ "- Dave Barry";
cita2 = '"'+"Je m'en fous si ça marche sur votre machine ! Nous ne livrons pas votre machine !"+`"`+ " - Inconnu(e)";
cita3 = '"'+"Codez comme si la personne qui finit par maintenir votre code est un psychopathe violent qui sait où vous vivez."+`"`+ " - Jeff Atwood";
cita4 = '"'+"N’importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre."+`"`+ " - Martin Fowler";
cita5 = '"'+"N'importe quel code que vous avez écrit depuis 6 mois ou plus sans y regarder pourrait tout aussi bien avoir été écrit par quelqu'un d'autre"+`"`+ " - Alan Eagleson";
cita6 = '"'+"Aujourd’hui, la programmation est devenue une course entre le développeur, qui s’efforce de produire de meilleures applications à l’épreuve des imbéciles et l’univers, qui s’efforce de produire de meilleurs imbéciles. Pour l’instant, l’univers a une bonne longueur d’avance"+`"`+ "— Rich Cook";


 // SLIDER DE CITATIONS 
const citation = document.getElementById("citations");
let citations = [cita0, cita1, cita2, cita3, cita4, cita5, cita6];
let slideIndex = 0;

function addSlide(n){ 
    slideIndex += n;
    if ( slideIndex > citations.length -1){
        slideIndex = 0;}
    else if (slideIndex < 0 ){
        slideIndex = citations.length -1 ;};
        // console.log(slideIndex);
    // citations[slideIndex];
    citation.innerHTML = `${citations[slideIndex]}`
}
setInterval("addSlide(1)", 6000);

{/* <a target="_blank" href=""></a> */}

//  SLIDER DE PROJETS

let snake, apiP1, apiP2, maquette1, maquette2;
snake = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Snake.github.io/"><img src="img/projets/Snake.png" alt=""></a>`
apiP1 = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/API-Search-D-D.github.io/"><img src = "img/projets/API-Search1.png"></a>`
apiP2 = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/API-Search-D-D.github.io/"><img src = "img/projets/API-Search2.png"></a>`
maquette1 = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Maquette-1.github.io/"><img src = "img/projets/maquette-1.png"></a>`
maquette2 = `<a class ="slideTransition" target="_blank" href="https://yacinedjahafi.github.io/Maquette-2.github.io/"><img src = "img/projets/maquette-2.png"></a>`
const slide = [snake, apiP1, apiP2, maquette1, maquette2];
const projets = document.getElementById("projet");

// SLIDER DESCRIPTION

const description = document.getElementById("description")
let descSnake, descApiP1, descApiP2, descMaquette1, descMaquette2;
descSnake = `<strong>Jeu du Snake</strong><br>Projet réalisé pour s'entrainer sur les fonctions ainsi que sur les évènements.</p>`
descApiP1 = `<strong>Application de recherche (première page)</strong><br>Pour l'instant, cette page nous permet de rechercher parmis des personnages, classes et armes déjà enregistrés. La recherche s'effectue à partir de trois caractères, lorsque ce projet sera terminé, il sera possible de créer son propre personnage. Ce sera par exemple utile pour des joueurs de role play du type Dungeons & Dragons.</p>`
descApiP2 = `<strong>Application de recherche (deuxième page)</strong><br>Apparait uniquement lorsqu'un personnage existant est recherché, une fonctionnalité de suggestion dans la barre de recherche sera implanté. Une liste des personnages existant sera également affiché sur la page de recherche.</p>`
descMaquette1 = `<strong>Premier site fait en HTML/CSS</strong><br>Il s'agit d'un site fait à partir d'une maquette lors des mes deux premières semaines d'apprentissage pour s'entrainer au HTML/CSS ainsi qu'au responsive.</p>`
descMaquette2 = `<strong>Deuxième site fait en HTML/CSS</strong><br>Egalement effectué à partir d'une maquette, pour continuer l'application de l'apprentissage d'HTML/CSS.</p>`
const descriptionSlide = [descSnake, descApiP1, descApiP2, descMaquette1, descMaquette2];


let projetIndex = 0;
// console.log(slide.length);
function Slider(m){
    projetIndex += m;
    
    if ( projetIndex > slide.length -1){
        projetIndex = 0;}
    else if (projetIndex < 0 ){
        projetIndex = slide.length -1 };
        console.log(projetIndex)
    // slide[projetIndex];
    projets.innerHTML = `${slide[projetIndex]}`
    description.innerHTML = `${descriptionSlide[projetIndex]}`
    // console.log(projets.innerHTML)
};


//  diaporama des slides:
// FAIRE UNE ANIMATION POUR LE SLIDER
// setInterval("Slider(1)", 8000)

// <strong></strong><br></p>


