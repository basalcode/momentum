async function getRandomImage() {
    const { url } = await fetch("https://picsum.photos/2400/1600")

    return url;
}

async function createImageElement() {
    const backgroundImage = document.createElement("img")
    backgroundImage.src = await getRandomImage();
    backgroundImage.alt = "배경 화면";
    backgroundImage.className = "background";

    document.body.appendChild(backgroundImage);
}

createImageElement();