export default renderContactTab;

function renderContactTab() {
  const body = document.querySelector('body');
  const contactTabNavItem = document.querySelector('#contact')

  const contentDiv = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const tagLine = document.createElement('h2');
  const hoursHeading = document.createElement('h3');
  const hoursInfo = document.createElement('p');
  const phoneHeading = document.createElement('h3');
  const phoneInfo = document.createElement('p');
  const emailHeading = document.createElement('h3');
  const emailInfo = document.createElement('p');

  contentDiv.id = 'content';
  contactHeading.textContent = 'Contact us!';
  tagLine.textContent = "Seriously, who doesn't like donuts??";
  hoursHeading.textContent = 'Store Hours';
  hoursInfo.textContent = 'Monday through Sunday 7am - 3pm'
  phoneHeading.textContent = 'Phone Information'
  phoneInfo.textContent = 'Telephone: (805)555-1234'
  emailHeading.textContent = 'Email Information'
  emailInfo.textContent = 'Email us at gonuts@do.nut'

  contentDiv.appendChild(contactHeading);
  contentDiv.appendChild(tagLine);
  contentDiv.appendChild(hoursHeading);
  contentDiv.appendChild(hoursInfo);
  contentDiv.appendChild(phoneHeading);
  contentDiv.appendChild(phoneInfo);
  contentDiv.appendChild(emailHeading);
  contentDiv.appendChild(emailInfo);

  body.appendChild(contentDiv);

  contactTabNavItem.style.background = '#ffffff';
}