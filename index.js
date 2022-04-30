// // Card 
const cardsCollection = document.getElementsByClassName("card");

const cards = Array.from(cardsCollection);

cards.forEach((card) => {
    card.addEventListener("click", () => window.location.href = "http://127.0.0.1:5500/pages/product/product.html")
})