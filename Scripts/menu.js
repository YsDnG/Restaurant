const menuPizza = document.querySelector('.menuPizza-Container');
const menuFelafel = document.querySelector('.menuFelafel-Container');
const titre = document.querySelector('.Titre')

const choiceMenu = document.querySelector('.menu-choice')
const choiceMenuButtons = document.querySelectorAll('.choice')
let clientMenuChoice = null
document.body.style.backgroundImage ='linear-gradient( 109.6deg,  rgba(15,2,2,1) 11.2%, rgba(36,163,190,1) 91.1% )'
menuPizza.style.display="none"
menuFelafel.style.display="none"


function afficherMenu(e)
{
    menuPizza.style.display="none"
    menuFelafel.style.display="none"
    clientMenuChoice = this.innerText.toLowerCase();
    choiceMenu.style.display="flex";
    choiceMenu.style.flexDirection ="column";
    choiceMenu.style.position="fixed";
    choiceMenu.style.left = "1em";
    if( clientMenuChoice === "felafel")
    {
        document.body.style.backgroundImage ='url("../Img/pexels-nataliya-vaitkevich-6275189.jpg")'
        menuPizza.style.display="none"
        menuFelafel.style.display="grid"
        titre.innerHTML ="Nos Felafel <3"
        
    }
    else
    {
        document.body.style.backgroundImage ='url("../Img/Pizza-pie-tomatoes-oil_2560x1600.jpg")'
        menuPizza.style.display="grid"
        menuFelafel.style.display="none"
        titre.innerHTML ="Nos Pizza <3"
    
    }
  
    
}

choiceMenuButtons.forEach(button => button.addEventListener('click', afficherMenu))