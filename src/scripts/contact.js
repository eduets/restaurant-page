export { loadContentContact };
import iceCream03 from "../images/ice-cream-03.jpg";

function loadContentContact(container) {
    const content = document.createElement('div');
    content.classList.add('inner-content');
    
    const title = document.createElement('h1');
    title.textContent = "Sweet Scoops Ice Cream";
    content.appendChild(title);

    const firstImg = document.createElement('img');
    firstImg.src = iceCream03;
    content.appendChild(firstImg);

    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = "Address: Main Street 123, City, Country";
    content.appendChild(firstParagraph);
    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = "Phone: +123 456 7890";
    content.appendChild(secondParagraph);
    const thirdParagraph = document.createElement('p');
    thirdParagraph.textContent = "Email: contact@sweetscoops.com";
    content.appendChild(thirdParagraph);
    const fourthParagraph = document.createElement('p');
    fourthParagraph.textContent = "Opening hours: Monday to Sunday, from 10:00 a.m. to 10:00 p.m.";
    content.appendChild(fourthParagraph);

    container.appendChild(content);
}
