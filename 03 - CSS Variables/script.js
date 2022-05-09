const rangeSpace = document.getElementById("rangeSpace") ;
const rangeBlur = document.getElementById("rangeBlur") ;
const color = document.getElementById("color") ;
const image = document.getElementById("image") ;

rangeSpace.addEventListener('change', changed) ;
rangeBlur.addEventListener('change', changed) ;
color.addEventListener('change', changed) ;

function changed() { 
    //image.style.filter =  `blur(${rangeBlur.value}px)` ;
   image.style.filter =  `blur(${rangeBlur.value}px) hue-rotate(${rangeSpace.value}deg)` ;
    image.style.borderColor =  `${color.value}` ;
}


window.addEventListener('load', changed)

