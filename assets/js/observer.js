const  x= document.getElementById('aboutUsImgtext');
const counters = document.querySelectorAll('.clientsection');
const img = document.querySelector('abousUsWrapImg')
// const speed = 300;

const observerOptionsNumbers ={ 
    root:null,
    threshold: 1.0,
    // root:document.getElementById('familyimg')
    
}
const observerOptionsAboutUs ={ 
    threshold: .1,
    rootMargin: '-10px 0px -0px 0px'
 

}

 const func = () => counters.forEach(counter => {
    const hideElements = () => {
        // const target = +counter.getAttribute('data-target');
        // const count = +counter.innerText;
        // const increment = 1;
        counters.classList.toggle('hide')
        
    }
    hideElements();
    
})
const hide = () => {
    counters.classList.toggle('hide')
}
//  Function which adds clasS(opacity) and other CSS styles when element is in view
const numcountObserver = new IntersectionObserver((entries, numcountObserver ) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){

        console.log(entry.target)
        // entry.target.classList.toggle('aboutUsBtnWrapScroll');
        func()
        // numcountObserver.unobserve(entry.target);
        }
      
    })
    
   }
 , observerOptionsNumbers)

 counters.forEach(counters => numcountObserver.observe(counters));

 
//  const secondNumObserver = new IntersectionObserver((entries, numcountObserver ) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting){
//             setTimeout(() => {
//                 entry.target.innerText = 0;
//         console.log(entry.target)
//         // entry.target.classList.toggle('aboutUsBtnWrapScroll');
//         secondNum()
//         numcountObserver.unobserve(entry.target);
//             }, 1000);
//         }
      
//     })
    
//    }
//  , observerOptionsNumbers)

 //Observer for the image at the bottom of the homepage
//  const observer = new IntersectionObserver((entries, observer ) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting){
//         console.log(entry.target)
//         entry.target.classList.toggle('aboutUsBtnWrapScroll')}
//         // entry.target.className = 'aboutUsBtnWrapScroll' }
    
//     })
//    }
//  , observerOptionsAboutUs)

//  observer.observe(x);