function makeHeader() {
    const content = document.getElementById("content");
    
    const header = document.createElement("header");
    
    const topMenu = document.createElement("div");
    topMenu.id = "top-menu";

    const storeName = document.createElement("h1");
    storeName.innerHTML = "&#9876;Murder Grill&#9876";
    topMenu.appendChild(storeName);

    const banner = document.createElement("div");
    banner.id = "banner";

    header.appendChild(topMenu);
    header.appendChild(banner);

    content.appendChild(header);
}

export {makeHeader};