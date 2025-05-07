export { loadContentMenu };
import iceCream04 from "../images/ice-cream-04.jpg";

function loadContentMenu(container) {
    const content = document.createElement('div');
    content.classList.add('inner-content');
    
    const title = document.createElement('h1');
    title.textContent = "Sweet Scoops Ice Cream";
    content.appendChild(title);

    const firstImg = document.createElement('img');
    firstImg.src = iceCream04;
    content.appendChild(firstImg);

    const menuItems = [
        "Vanilla - $3.00",
        "Chocolate - $3.00",
        "Strawberry - $3.00",
        "Lemon - $3.00",
        "Mango - $3.50",
        "Mint with Chocolate - $3.50",
        "Coconut - $3.50",
        "Pistachio - $4.00",
        "Cookies and Cream - $4.00",
        "Nuts - $4.00",
        "Banana - $3.50",
        "Raspberry - $3.50",
        "Dulce de Leche - $4.00",
        "Coffee - $3.50",
        "Pina Colada - $4.00",
        "Salted Caramel - $4.00",
        "Lemon with Mint - $3.50",
        "Dulce de Leche with Nuts - $4.50"
    ]

    for (const item of menuItems) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('menu-item');
        paragraph.textContent = item;
        content.appendChild(paragraph);
    }

    container.appendChild(content);
}
