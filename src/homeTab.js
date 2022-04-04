export default renderHomeTab;
import donutImage from './home.jpeg';

function renderHomeTab() {
  const body = document.querySelector('body');
  const homeTabNavItem = document.querySelector('#home')

  const contentDiv = document.createElement('div');
  const restaurantImage = document.createElement('img');
  const restaurantName = document.createElement('h1');
  const tagLine = document.createElement('h2');
  const restaurantCopy = document.createElement('p');

  contentDiv.id = 'content';
  restaurantImage.src = donutImage;
  restaurantName.textContent = 'Go Nuts for Do Nuts';
  tagLine.textContent = "Seriously, who doesn't like donuts??";
  restaurantCopy.textContent = "Go Nuts for Do Nuts has been a family owned and operated donut shop since 1971. Known for both our classics (for when you just want an ol' fashioned glazed donut) and our wacky specials (blueberry walnut BACON anyone??), we put care and love into all our creations and always treat our customers as if they were part of the family. But don't take our word for it, come on in and try a donut for yourself!";

  contentDiv.appendChild(restaurantImage);
  contentDiv.appendChild(restaurantName);
  contentDiv.appendChild(tagLine);
  contentDiv.appendChild(restaurantCopy);

  body.appendChild(contentDiv);

  homeTabNavItem.style.background = '#ffffff';
}