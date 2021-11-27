function makeFooter() {
    const footer = document.createElement("footer");
   
    const social = document.createElement("div");
    social.id = "social";

    const phone = document.createElement("i");
    phone.classList.add("fas");
    phone.classList.add("fa-phone-alt");

    const envelope = document.createElement("i");
    envelope.classList.add("fas");
    envelope.classList.add("fa-envelope"); 

    const instagram = document.createElement("i");
    instagram.classList.add("fab");
    instagram.classList.add("fa-instagram"); 

    const marker = document.createElement("i");
    marker.classList.add("fas");
    marker.classList.add("fa-map-marker-alt"); 

    social.appendChild(phone);
    social.appendChild(envelope);
    social.appendChild(instagram);
    social.appendChild(marker);

    footer.appendChild(social);

    const copy = document.createElement("div");
    copy.id = "copyright";
    copy.innerHTML = "Copyright &copy; Murder Grill 2021";

    footer.appendChild(copy);

    return footer;
}

export { makeFooter };