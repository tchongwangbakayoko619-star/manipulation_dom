const image = document.getElementById("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const images = [
    "../Niveau Débutant/image/ChatGPT Image 10 juil. 2026, 12_54_32.png",
    "../Niveau Débutant/image/image1.jpg",
    "../Niveau Débutant/image/WhatsApp Image 2026-07-10 at 17.29.01.jpeg",
    "../Niveau Débutant/image/580b57fbd9996e24bc43bfe9.png",
];

let index = 0;


function afficherImage() {
    image.src = images[index];
}


next.addEventListener("click", () => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    afficherImage();

});


prev.addEventListener("click", () => {

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    afficherImage();

});