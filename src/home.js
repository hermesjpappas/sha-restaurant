function makeHome() {
    const container = document.createElement("div");
    
    const heading = document.createElement("h1");
    heading.textContent = "eat.";

    const tagline = document.createElement("h2");
    tagline.textContent = "or we might just have to murder you...";

    container.appendChild(heading);
    container.appendChild(tagline);

    const text = `           <p>...with our delicious flavors, of course!</p>
            <p>We have the best steak in the whole damn world. We choose the freshest of animals and murder the ever-loving life out of them. We have a long tradition of being the best in the business. We make sure you can <span class="strong">taste</span> the blood. Otherwise...what's the point, am I right?</p>
            <p>We guaran-freakin'-tee that your meal will be absolutely unforgettable. Since you cannot hear the screams of the animal you have the privilege of digesting, we make sure you can taste the pain and suffering. I mean, we actually follow a relatively ethical practice of painless termination, but <span class="strong">you</span> can imagine otherwise while you're chewing in exquisite pleasure.</p>
            <p>Please don't waste our time by asking for vegan options. Understand that <span class="strong">we don't waste our time on vegans.</span> Go to your hippie restaurant and leave us alone. We believe in meat, and in meat we shall find deliverance. Amen.</p>
            <p>You can find our wonderful restaurant at <a href="https://www.goodreads.com/book/show/8695.The_Restaurant_at_the_End_of_the_Universe" target="_blank">the end of the universe.</a> Depending on the type of meat you're into, the appropriate animal will take your order and point to its cuts so you can <span class="strong">really choose</span> what you want.</p>
            <p>Everything costs <span class="strong">42&euro;</span>. If that doesn't make sense...don't worry about it.</p>`;

    container.innerHTML += text;

    return container;
}

export { makeHome };