let slideIndex = 0;

let slides = document.querySelectorAll(".carrousel_container");
let inverted = false;

function showSlides() {

                    /* -------------- */

    if(slideIndex <= 1) { inverted = false; slideIndex += 1; }
    else if((slideIndex >= slides.length)) { inverted = true; slideIndex -= 1; }
    else {

        if((slideIndex >= 1 && slideIndex <= slides.length) || ((slideIndex >= 1 && slideIndex <= dots.length))) {

            if(inverted) { slideIndex -= 1; }
            else if(!inverted) { slideIndex += 1; }
        }
    }
                    /* -------------- */

    for(let slide of slides) {
        
        if(!slide.classList.contains('d-none')) { slide.classList.add('d-none'); }
        
    }
                    /* -------------- */

    if(slides[slideIndex-1].classList.contains('d-none')) { slides[slideIndex-1].classList.remove('d-none'); }
    
    setTimeout(showSlides, 5000); // Change l'image toutes les 5 secondes
}

showSlides();