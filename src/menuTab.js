export default renderMenuTab;

function renderMenuTab() {
  const body = document.querySelector('body');
  const menuTabNavItem = document.querySelector('#menu')

  const contentDiv = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const tagLine = document.createElement('h2');
  const menuList = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  const menuItem2 = document.createElement('li');
  const menuItem3 = document.createElement('li');
  const menuItem4 = document.createElement('li');
  const menuItem5 = document.createElement('li');

  let menuItems = [];
  menuItems.push(menuItem1, menuItem2, menuItem3, menuItem4, menuItem5);

  contentDiv.id = 'content';
  menuHeading.textContent = 'Our Menu';
  tagLine.textContent = "Seriously, who doesn't like donuts??";
  menuItem1.textContent = 'Old Fashioned Glazed $1.00';
  menuItem2.textContent = 'New Age Glazed $1.20';
  menuItem3.textContent = 'Blueberry Walnut Bacon $1.50';
  menuItem4.textContent = 'Chocolate Glazed $1.20';
  menuItem5.textContent = 'Bavarian Cream $1.50';

  menuItems.forEach((item) => menuList.appendChild(item));

  contentDiv.appendChild(menuHeading);
  contentDiv.appendChild(tagLine);
  contentDiv.appendChild(menuList);

  body.appendChild(contentDiv);

  menuTabNavItem.style.background = '#ffffff';
}