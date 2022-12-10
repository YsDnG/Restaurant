 const menuPizza = document.querySelector('.menuPizza');
 const menuFelafel = document.querySelector('.menuFelafel');
 const gridMenus = document.querySelectorAll('.menuContainer');
 const panel= document.querySelectorAll('.panel')

gridMenus.forEach(g=> g.style.display="none")

 


function afficherMenu(e)
{
    // menuPizza.style.display="none"
    // menuFelafel.style.display="none"
    // clientMenuChoice = this.innerText.toLowerCase();
    // choiceMenu.style.display="flex";
    // choiceMenu.style.flexDirection ="column";
    // choiceMenu.style.position="fixed";
    // choiceMenu.style.left = "1em";
    // if( clientMenuChoice === "felafel")
    // {
    //     document.body.style.backgroundImage ='url("../Img/pexels-nataliya-vaitkevich-6275189.jpg")'
    //     menuPizza.style.display="none"
    //     menuFelafel.style.display="grid"
    //     titre.innerHTML ="Nos Felafel <3"
        
    // }
    // else
    // {
    //     document.body.style.backgroundImage ='url("../Img/Pizza-pie-tomatoes-oil_2560x1600.jpg")'
    //     menuPizza.style.display="grid"
    //     menuFelafel.style.display="none"
    //     titre.innerHTML ="Nos Pizza <3"
    
    //}
    
    
}







function toggleOpen(e)
{
    
    this.classList.toggle('open')   
}

function toggleActive(e)
{
    if(this.classList.contains('open')){
   
            if( this.classList.contains('panel1'))       
                menuPizza.style.display="grid" 
                
            if( this.classList.contains('panel2'))
                menuFelafel.style.display="grid" 
                 
        
    }
    else{

        if( this.classList.contains('panel1'))
        menuPizza.style.display="none" 
  

        if( this.classList.contains('panel2'))
        menuFelafel.style.display="none" 
    }
  
    if(e.propertyName.includes('flex-grow')) 
    {
        console.log(e.propertyName)
        this.classList.toggle('open-active')
    }

    
}


panel.forEach(p => p.addEventListener('click', toggleOpen))
panel.forEach(p => p.addEventListener('transitionend', toggleActive))