function init() {
    let images = document.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showImage;
    }
}

function showImage(event) {
    let image = event.target;
    let name = image.id;
    image.src = "./img/" + name + ".jpg";

    setTimeout(reblur, 2000, image);
}

function reblur(image) {
    let name = image.id;
    image.src = "./img/" + name + "blur.jpg";
}

window.onload = init;