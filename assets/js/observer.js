const  x= document.getElementById('aboutUsImgtext');
const posts = document.querySelector('#inprogresswrap');
const clientdivs = document.querySelectorAll('#clientsection')
const selfie = document.querySelector('#selfie')
const sidebar = document.querySelector('#sidebar')
const uparrow = document.querySelectorAll('#uparrow')
// const speed = 300;

const observerOptions ={ 
    root:null,
    threshold: 1.0,
    // rootMargin:document.getElementById('familyimg')
    
}
//Observes the personal projects to hide the client work on scroll down
 const hide = () => clientdivs.forEach(div => {
    div.className = ('hide') 
})

const observer = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
        console.log(entry.target)
        hide()
        }     
    })
    
   }
 , observerOptions) 

 observer.observe(posts);

//  Observes the name intro to re-display client work on scroll up
 const show = () => clientdivs.forEach(div => {
    div.className = ('mini-posts') 
})

const observerUp = new IntersectionObserver((entries, observer ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
        console.log(entry.target)
        show()
        }     
    })
    
   }
 , observerOptions) 

 observerUp.observe(selfie)
 

//Event listeners for buttons
document.getElementById('needawebsitebtndesktop').addEventListener('click',() => {
    sidebar.classList.toggle('#sidebar')
    sidebar.className = ('sidebarout')
})
