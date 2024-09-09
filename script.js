function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "CODER",
    "PROGRAMMER",
    "ENGINEER",
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER"
    //"ARCHITECT",
    //"FULL-STACK DEVELOPER",
    //"UI/UX",

    
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

function showHireImage() {
    const hireImageContainer = document.getElementById('hire-image-container');
    
    // Clone the image to allow for multiple animations
    const newImage = hireImageContainer.cloneNode(true);
    document.body.appendChild(newImage);

    // Show and animate the image
    newImage.style.display = 'block';

    // Remove the image after the animation completes
    setTimeout(() => {
        newImage.remove();
    }, 4000); // Adjust the timeout according to the animation duration
}
