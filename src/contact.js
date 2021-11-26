function makeContact() {
    const container = document.createElement("div");
    
    const heading = document.createElement("h1");
    heading.textContent = "talk.";

    const tagline = document.createElement("h2");
    tagline.textContent = "or text. or something";

    container.appendChild(heading);
    container.appendChild(tagline);


    const text =  `<p>You can follow us on social media, send us an email, call us on the phone, write us a letter, send us a carrier pigeon, whatever you want! Just don't complain about anything. You won't get a response from us.</p>
            <p><span class="strong">Phone:</span> 0118999881999119725...3</p>
            <p><span class="strong">Email:</span> murder@murder-grill.murder</p>
            <p><span class="strong">Instagram:</span> @THE-murder-grill</p>
            <p><span class="strong">Address:</span> The End Of The Universe</p>`;

    container.innerHTML += text;

    return container;
}

export { makeContact };