async function getRandomImage() {
    const { url } = await fetch("https://picsum.photos/2400/1600")

    return url;
}

async function createImageElement() {
    const backgroundImage = document.createElement("img")
    backgroundImage.src = await getRandomImage();

    document.body.appendChild(backgroundImage);
}

createImageElement();