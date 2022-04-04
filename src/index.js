import renderHomeTab from './homeTab';
import renderMenuTab from './menuTab';
import renderContactTab from './contactTab';
import './normalize.css';
import './style.css';

// write main code as IIFE to not polute global scope
(function () {
  renderHomeTab();

  const homeTabMenuItem = document.querySelector('#home');
  const menuTabMenuItem = document.querySelector('#menu');
  const contactTabMenuItem = document.querySelector('#contact');

  const switchTabs = function(tabRender) {
    const contentDiv = document.querySelector('#content');
    contentDiv.remove();

    homeTabMenuItem.style.background = 'rgb(149, 210, 245)';
    menuTabMenuItem.style.background = 'rgb(149, 210, 245)';
    contactTabMenuItem.style.background = 'rgb(149, 210, 245)';
    tabRender();
  }

  homeTabMenuItem.addEventListener('click', () => {
    switchTabs(renderHomeTab)
  });
  menuTabMenuItem.addEventListener('click', () => {
    switchTabs(renderMenuTab)
  });
  contactTabMenuItem.addEventListener('click', () => {
    switchTabs(renderContactTab)
  });
})();