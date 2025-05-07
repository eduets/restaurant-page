import "./style.css";
import { loadContentHome } from "./scripts/home.js";
import { loadContentMenu } from "./scripts/menu.js";
import { loadContentContact } from "./scripts/contact.js";

(function () {
    const container = document.querySelector('#content');

    const buttonHome = document.querySelector('#button-home');
    const buttonMenu = document.querySelector('#button-menu');
    const buttonContact = document.querySelector('#button-contact');

    const buttonsBottonBorder = document.querySelectorAll('.button-bottom-border');
    const buttonsNav = document.querySelectorAll('nav button');

    function clearElement(element) {
        const elementChildren = element.childNodes;
        for (let i=elementChildren.length-1; i>=0; i--) {
            elementChildren[i].remove();
        }
    }

    function hideButtonsBottomBorder() {
        for (const buttonBottonBorder of buttonsBottonBorder) {
            buttonBottonBorder.style.visibility = 'hidden';
        }
    }

    function showButtonBottomBorder(buttonTarget) {
        const buttonBottomBorder = buttonTarget.parentNode.querySelector('.button-bottom-border');
        buttonBottomBorder.style.visibility = 'visible';
    }

    function enableButtonsNav() {
        for (const buttonNav of buttonsNav) {
            buttonNav.disabled = false;
        }
    }

    function disableButtonNav(buttonTarget) {
        buttonTarget.disabled = true;
    }

    function loadContent(buttonTarget, loadContentFunction) {
        hideButtonsBottomBorder();
        enableButtonsNav();
        clearElement(container);
        loadContentFunction();
        showButtonBottomBorder(buttonTarget);
        disableButtonNav(buttonTarget);
    }

    buttonHome.addEventListener('click', (event) => {
        loadContent(event.target, () => loadContentHome(container));
    });
    buttonMenu.addEventListener('click', (event) => {
        loadContent(event.target, () => loadContentMenu(container));
    });
    buttonContact.addEventListener('click', (event) => {
        loadContent(event.target, () => loadContentContact(container));
    });

    loadContent(buttonHome, () => loadContentHome(container));
})();