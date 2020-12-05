import Slider from './slider';
import Elements from './elements'
import Preloader from '../preloader/preloader'

let subTextslide= document.querySelector("#sub-slider");
let titleslide= document.querySelector("#title-slider");
let textslide= document.querySelector("#text-slider");

let imageslide= document.querySelector("#image-slider");
let textcontent= document.querySelector("#slider-text-content");

let rightArrow=document.querySelector(".rightArrow");
let LeftArrow=document.querySelector(".LeftArrow");


let slider= new Slider({
    elements:Elements,
    animationFunc:(element)=>{
        textcontent.classList.add("hide");
        imageslide.classList.add("hide");
        
        setTimeout(()=>{
        subTextslide.innerHTML = element.subTitle;
        titleslide.innerHTML = element.title;   
        imageslide.src = element.image; 
        textslide.innerHTML = element.text;
        textcontent.classList.remove("hide");
        imageslide.classList.remove("hide"); 
        },600)  
    },
    speed:5000
});

slider.play();

 rightArrow.addEventListener('click',slider.next)
 LeftArrow.addEventListener('click',slider.prev)

 const imagesPath = Elements.map(el=>el.image)

 Preloader.preloaderImages({
     images:imagesPath,
     completed:function(){
         document.querySelector(".controls").style.display ="block"
     }
 })
