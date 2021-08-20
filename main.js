function init() {
    let images = document.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showImage;
        images[i].onmouseout = reblur;
    }
}

function showImage(event) {
    let image = event.target;
    let name = image.id;
    image.src = "./img/" + name + ".jpg";



}

function reblur(event) {
    let image = event.target;
    let name = image.id;
    image.src = "./img/" + name + "blur.jpg";
}

window.onload = init;