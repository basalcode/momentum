const images = [
    "./image/forestAndSea.jpg",
    "./image/iceSea.jpg",
    "./image/island.jpg",
    "./image/mountain.jpg",
    "./image/sea.jpg",
    "./image/snowMountain.jpg",
    "./image/volcano.jpg"
];

function getRandomImage() {
    const imageLength = images.length;
    const randomIndex = Math.floor(Math.random() * imageLength);

    const path = images[randomIndex];

    console.log('path', path);

    return path;
}

function createImageElement() {
    const backgroundImage = document.createElement("img")
    backgroundImage.src = getRandomImage();
    backgroundImage.alt = "배경 화면";
    backgroundImage.className = "background";

    document.body.appendChild(backgroundImage);
}

createImageElement();