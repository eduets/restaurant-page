export { loadContentHome };
import iceCream01 from "../images/ice-cream-01.jpg";
import iceCream02 from "../images/ice-cream-02.jpg";

function loadContentHome(container) {
    const content = document.createElement('div');
    content.classList.add('inner-content');
    
    const title = document.createElement('h1');
    title.textContent = "Sweet Scoops Ice Cream";
    content.appendChild(title);

    const firstParagraph = document.createElement('p');
    firstParagraph.textContent =
        "Welcome to Sweet Scoops Ice Cream, your " +
        "ultimate destination for delicious, handcrafted ice cream treats! At " +
        "Sweet Scoops, we are passionate about creating the perfect scoop for " +
        "every taste. Our wide selection of flavors ranges from classic vanilla " +
        "and chocolate to unique, seasonal creations made with fresh, quality " +
        "ingredients. Whether you're craving a refreshing cone on a hot day or a " +
        "decadent sundae, we have something to satisfy every craving."
    content.appendChild(firstParagraph);

    const firstImg = document.createElement('img');
    firstImg.src = iceCream01;
    content.appendChild(firstImg);

    const secondParagraph = document.createElement('p');
    secondParagraph.textContent =
        "Our cozy, welcoming shop is the perfect place " +
        "to gather with family and friends, celebrate special moments, or simply enjoy " +
        "a sweet escape. We pride ourselves on providing exceptional customer service and " +
        "a friendly atmosphere where everyone feels at home. In addition to our traditional " +
        "ice creams, we also offer dairy-free and vegan options, ensuring that everyone can " +
        "indulge in a delicious treat."
    content.appendChild(secondParagraph);

    const secondImg = document.createElement('img');
    secondImg.src = iceCream02;
    content.appendChild(secondImg);

    const thirdParagraph = document.createElement('p');
    thirdParagraph.textContent =
        "At Sweet Scoops, we believe that ice cream is more than " +
        "just a dessert - it's a joyful experience. We are committed to using sustainable " +
        "practices and local ingredients whenever possible to bring you not only great taste " +
        "but also peace of mind. Come visit us today and discover your new favorite flavor. " +
        "We can't wait to serve you and share our love of ice cream!"
    content.appendChild(thirdParagraph);

    container.appendChild(content);
}
