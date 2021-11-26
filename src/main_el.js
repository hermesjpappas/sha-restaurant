const homeContent = `            <h1>Eat.</h1>
            <h2>Or we might just have to murder you...</h2>
            <p>...with our delicious flavors, of course!</p>
            <p>We have the best steak in the whole damn world. We choose the freshest of animals and murder the ever-loving life out of them. We have a long tradition of being the best in the business. We make sure you can <span class="strong">taste</span> the blood. Otherwise...what's the point, am I right?</p>
            <p>We guaran-freakin'-tee that your meal will be absolutely unforgettable. Since you cannot hear the screams of the animal you have the privilege of digesting, we make sure you can taste the pain and suffering. I mean, we actually follow a relatively ethical practice of painless termination, but <span class="strong">you</span> can imagine otherwise while you're chewing in exquisite pleasure.</p>
            <p>Please don't waste our time by asking for vegan options. Understand that <span class="strong">we don't waste our time on vegans.</span> Go to your hippie restaurant and leave us alone. We believe in meat, and in meat we shall find deliverance. Amen.</p>
            <p>You can find our wonderful restaurant at <a href="https://www.goodreads.com/book/show/8695.The_Restaurant_at_the_End_of_the_Universe" target="_blank">the end of the universe.</a> Depending on the type of meat you're into, the appropriate animal will take your order and point to its cuts so you can <span class="strong">really choose</span> what you want.</p>
            <p>Everything costs <span class="strong">42&euro;</span>. If that doesn't make sense...don't worry about it.</p>`;

const menuContent = `<h1>Choose.</h1>
            <h2>we won't tell you twice.</h2>
            <p class="price"><span class="strong">Pork:</span> 42&euro;</p>
            <p class="price"><span class="strong">Beef: </span>42&euro;</p>
            <p class="price"><span class="strong">Venison: </span>42&euro;</p>
            <p class="price"><span class="strong">Kangaroo: </span>42&euro;</p>
            <p class="price"><span class="strong">Iguana: </span>42&euro;</p>
            <p class="price"><span class="strong">Human: </span>TBA</p>`;

const contactContent = ` <h1>Talk.</h1>
            <h2>or text. or something.</h2>
            <p>You can follow us on social media, send us an email, call us on the phone, write us a letter, send us a carrier pigeon, whatever you want! Just don't complain about anything. You won't get a response from us.</p>
            <p><span class="strong">Phone:</span> 0118999881999119725...3</p>
            <p><span class="strong">Email:</span> murder@murder-grill.murder</p>
            <p><span class="strong">Instagram:</span> @THE-murder-grill</p>
            <p><span class="strong">Address:</span> The End Of The Universe</p>`;


function makeMain() {
    const main = document.createElement("main");

    const tabLabels = document.createElement("div");
    tabLabels.id = "tab-labels";

    const home = document.createElement("div");
    home.id = "home";
    home.textContent = "home";
    home.classList.add("tab-label");
    home.classList.add("active-h");

    const menu = document.createElement("div");
    menu.id = "menu";
    menu.textContent = "menu";
    menu.classList.add("tab-label");

    const contact = document.createElement("div");
    contact.id = "contact";
    contact.textContent = "contact";
    contact.classList.add("tab-label");

    tabLabels.appendChild(home);
    tabLabels.appendChild(menu);
    tabLabels.appendChild(contact);

    main.appendChild(tabLabels);


    return main;
}

export { makeMain, homeContent, menuContent, contactContent };