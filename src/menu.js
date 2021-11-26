function makeMenu() {
    const container = document.createElement("div");
    
    const heading = document.createElement("h1");
    heading.textContent = "choose.";

    const tagline = document.createElement("h2");
    tagline.textContent = "we won't ask you twice.";

    container.appendChild(heading);
    container.appendChild(tagline);


    const text = `<p class="price"><span class="strong">Pork:</span> 42&euro;</p>
            <p class="price"><span class="strong">Beef: </span>42&euro;</p>
            <p class="price"><span class="strong">Venison: </span>42&euro;</p>
            <p class="price"><span class="strong">Kangaroo: </span>42&euro;</p>
            <p class="price"><span class="strong">Iguana: </span>42&euro;</p>
            <p class="price"><span class="strong">Human: </span>TBA</p>`;
    
    container.innerHTML += text;

    return container;
}

export { makeMenu };