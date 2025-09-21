function addTestimonial(text, author, imageSrc) {
    const container = document.querySelector(".fourthComponentContainer");

    const card = document.createElement("div");
    card.className = "fourthComponent";

    const textDiv = document.createElement("div");
    textDiv.className = "fourthComponentTexts";

    const textP = document.createElement("p");
    textP.className = "fourthComponentText";
    textP.textContent = text;

    const authorP = document.createElement("p");
    authorP.className = "fourthComponentText2";
    authorP.textContent = author;

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = author;
    img.className = "fourthComponentImage";

    textDiv.appendChild(textP);
    textDiv.appendChild(authorP);
    card.appendChild(textDiv);
    card.appendChild(img);

    container.appendChild(card);
}


document.getElementById("addTestimonialBtn").addEventListener("click", () => {
    addTestimonial(
        "This is a new testimonial created by clicking a button.",
        "Alice Johnson",
        "images/testimonials-03.jpg"
    );
});

