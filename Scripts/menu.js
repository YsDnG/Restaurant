 const menuPizza = document.querySelector('.menuPizza');
 const menuFelafel = document.querySelector('.menuFelafel');
 const gridMenus = document.querySelectorAll('.menuContainer');
 const panel= document.querySelectorAll('.panel')
 const aboutLink = document.getElementById('aboutLink')
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
        if(this !== panel[0] && panel[0].children[1].display ==='grid')
        {
            deleteButton()
            setTimeout(()=>
            {
            panel[0].addEventListener('click',toggleOpen)
            },200 )
            
        }

        panel.forEach((p) => {
           if(p != this)
            if(p.classList.contains('open'))
                p.classList.remove('open')
         
           
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
                 
                
    }
    else
    {
        this.classList.remove('open-active')

        if( this.classList.contains('panel1'))
        {
            this.children[0].style.display='contents'
            menuPizza.style.display="none" 
           
        }

        if( this.classList.contains('panel2'))
        {
            this.children[0].style.display='contents'
            menuFelafel.style.display="none" 
        }
    }  
    
}


function afficherMenu(e)
{
    
    if(this.innerHTML ==='Base Crème')
    {
        deleteButton()
       
        menuPizza.style.display="grid" 
        setTimeout(()=>
        {
        panel[0].addEventListener('click',toggleOpen)
        },500 )
    }
    if(this.innerHTML === 'Base Tomate')
        {
            deleteButton()
            menuPizza.style.display="grid" 
            setTimeout(()=>
            {
            panel[0].addEventListener('click',toggleOpen)
            },500 )
        }

   
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


    btnCrème.addEventListener('click',afficherMenu)
    btnTomate.addEventListener('click',afficherMenu)
    panelclicked.appendChild(divButton)
    divButton.appendChild(btnTomate)
    divButton.appendChild(btnCrème)
}

function deleteButton()
{
    panel[0].removeChild(panel[0].children[2])
    btnCrème = null
    btnTomate =null
}


panel.forEach(p => p.addEventListener('click', toggleOpen))
panel.forEach(p => p.addEventListener('transitionend', toggleActive))