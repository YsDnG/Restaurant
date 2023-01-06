 const menuPizza = document.querySelector('.menuPizza');
 const menuFelafel = document.querySelector('.menuFelafel');
 const menuCocktail = document.querySelector('.menuCocktail')
 const gridMenus = document.querySelectorAll('.menuContainer');
 const panel= document.querySelectorAll('.panel')
 const aboutLink = document.getElementById('aboutLink')
 const images = menuPizza.querySelectorAll('.imgPizzaCrème')
 const tabMenuPizza = document.querySelector('.pizza-tab-display');
 const sliderPizza = menuPizza.querySelector('.sliderContainer')

let btnCrème = null
let btnTomate = null


gridMenus.forEach(g=> g.style.display="none")

if (window.innerWidth < 500)
{
        aboutLink.innerHTML ='À Propos'
}
else
{
    aboutLink.innerHTML ='Qui sommes nous'
}


function toggleOpen(e)
{
   
    this.classList.toggle('open') 

    if(window.innerWidth < 500)
    {
        if(this !== panel[0] && panel[0].children[2] !== undefined)
        {
            deleteButton()
            setTimeout(()=>
            {
            panel[0].addEventListener('click',toggleOpen)
            },500 )
           
            
        }
        if(!this.classList.contains('open'))
        panel.forEach((p) => {
            if(p != this)
                p.classList.remove('close')
        }); 

        panel.forEach((p) => {
           if(p != this)
            if(p.classList.contains('open'))
            {
                p.classList.remove('open')
            }
            if(this!= p && this.classList.contains('open'))
                p.classList.add('close')
        });
      

        
    }
    
      
}

function toggleActive(e)
{
    if(this.classList.contains('open'))
    {
        this.classList.add('open-active')

            if(this.classList.contains('panel1')) 
            {    
                 this.children[0].style.display='none'
                 if(btnCrème === null)
                     createButton(this);
                     
                this.removeEventListener('click',toggleOpen)

            }
                
            if( this.classList.contains('panel2'))
            {
                this.children[0].style.display='none'
                menuFelafel.style.display="grid"
            } 

            if( this.classList.contains('panel3'))
            {
                this.children[0].style.display='none'
                menuCocktail.style.display="grid"
            } 
                 
                
    }
    else
    {
        this.classList.remove('open-active')

        if( this.classList.contains('panel1'))
        {
            this.children[0].style.display='contents'
            menuPizza.style.display="none"

            tabMenuPizza.style.display='none' 
           
        }

        if( this.classList.contains('panel2'))
        {
            this.children[0].style.display='contents'
            menuFelafel.style.display="none" 
        }

        if( this.classList.contains('panel3'))
        {
            this.children[0].style.display='contents'
            menuCocktail.style.display="none" 
        }
    }  
    
}


function afficherMenu(e)
{
    
    
            deleteButton()
            menuPizza.style.display="flex" 
            tabMenuPizza.style.display='grid'
            
            setTimeout(()=>
            {
            panel[0].addEventListener('click',toggleOpen)
            },500 )
        
}

function makeSlider(e)
{
    deleteButton()
    menuPizza.style.display="flex" 
    sliderPizza.style.display='grid'
    let currentSlide=1
    const images = sliderPizza.querySelectorAll('img')
    const slideshow = document.getElementById('slideshow')
    const pizzaCrèmeIng =[
        {pizza:"Base tomate/ origan/ olives,poulet, chorizos, viandes hachées, mozzarella, basilic frais"},
        {pizza:"Sauce tomate, poulet rôti mozzarella, tomates cerises, ananas "},
        {pizza:"Sauce tomate, poulet rôti mozzarella, tomates cerises, ananas "},
        {pizza:"Sauce tomate, poulet rôti mozzarella, tomates cerises, ananas "}
    ]
    this.disabled=true
    

        const contenu =document.createElement('p')
        contenu.innerHTML= images[currentSlide].alt
        sliderPizza.querySelector('.slider-pizza-tittle').appendChild(contenu)
    
    const ingPizza = sliderPizza.querySelector('.Ing-Pizza-Slider')
    ingPizza.innerHTML='Ingredient: '+ pizzaCrèmeIng[currentSlide-1].pizza
    pizzaCrèmeIng[1].pizza
    
      
        
    slideshow.innerHTML = `<img src="${images[currentSlide].src}" alt="${images[currentSlide].alt}">`

    sliderPizza.querySelectorAll('.slideButton').forEach(b=>b.addEventListener('click',()=>{
            if(b.value ==='>')
                currentSlide=(currentSlide+1)%images.length
            else
                    currentSlide=(currentSlide-1+4)%images.length
         slideshow.innerHTML = `<img src="${images[currentSlide].src}" alt="${images[currentSlide].alt}">`
        contenu.innerHTML= images[currentSlide].alt
        ingPizza.innerHTML='Ingredients: '+ pizzaCrèmeIng[currentSlide-1].pizza
    }))

    slideshow.addEventListener('click',()=>{
        
             panel[0].children[0].style.display='contents'
            sliderPizza.style.display="none"
            menuPizza.style.display="none"
            panel[0].addEventListener('click',toggleOpen)
            
    })
        

}
function changeslider(e)
{
    
}

function createButton(panelclicked)
{
    const divButton = document.createElement('div')

    btnCrème = document.createElement('button');
    btnTomate = document.createElement('button');

    btnCrème.innerHTML='Base Crème'
    btnTomate.innerHTML='Base Tomate'

    btnCrème.classList.add('buttonPizza')
    btnTomate.classList.add('buttonPizza')
    divButton.classList.add('conteneurButtonPizza')


    btnCrème.addEventListener('click',makeSlider)
    btnTomate.addEventListener('click',afficherMenu)
    panelclicked.appendChild(divButton)
    divButton.appendChild(btnTomate)
    divButton.appendChild(btnCrème)
}



function deleteButton()
{
    while(panel[0].children[2].firstChild)
        panel[0].children[2].removeChild(panel[0].children[2].lastChild)
    panel[0].removeChild(panel[0].children[2])
    btnCrème = null
    btnTomate =null
}


panel.forEach(p => p.addEventListener('click', toggleOpen))
panel.forEach(p => p.addEventListener('transitionend', toggleActive))