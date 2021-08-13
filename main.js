function init() {
    let images = document.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showImage;
    }
}

function showImage() {
    let image = document.getElementById("zero");
    image.src = "./img/zero.jpg"
}

window.onload = init;