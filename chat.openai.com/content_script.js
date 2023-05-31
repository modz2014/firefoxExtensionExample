// Create a new iframe element
const iframe = document.createElement('iframe');
iframe.id = 'underside-iframe-container';
iframe.name = 'underside-iframe-container';

iframe.frameBorder = 0;
iframe.allow = 'clipboard-write';
iframe.style.cssText = 'position: fixed; top: 145px; right: 0; height: 86%; width: 40%; z-index: 9999; border-radius: 10px; display: none;';

// Select the input field in the chatbot iframe so the user can input a search query
iframe.onload = function() {
  const input = iframe.contentDocument.querySelector('input[name="q"]');
};

// Append the iframe to the body
document.body.appendChild(iframe);

// Create the chat button
const button = document.createElement('button');
button.innerHTML = 'Chat';
button.style.cssText = `
  background: rgb(26,0,127);
  background: linear-gradient(156deg, rgba(26,0,127,1) 0%, rgba(255,99,112,1) 100%);
  background-size: cover;
  box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: #F1F3F4;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  margin: 0px -120px;
  border: 1px solid #000;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  position: relative;
`;

// Add a pseudo-element for the inner shadow effect
button.insertAdjacentHTML('beforeend', '<div class="inner-shadow"></div>');
const innerShadow = button.querySelector('.inner-shadow');
innerShadow.style.cssText = `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  pointer-events: none;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: -1;
`;


// Press down effect
button.addEventListener('mousedown', function () {
  button.style.boxShadow = 'inset 0 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.08)';
  button.style.transform = 'translateY(2px)';
  innerShadow.style.boxShadow = 'inset 0 1px 2px rgba(0, 0, 0, 0.1)';
});

// Release button effect
button.addEventListener('mouseup', function () {
  button.style.boxShadow = 'inset 0 -3px 0 rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)';
  button.style.transform = 'translateY(0)';
  innerShadow.style.boxShadow = 'inset 0 2px 5px rgba(0, 0, 0, 0.2)';
});

// Reset button effect when it loses focus
button.addEventListener('blur', function () {
  button.style.boxShadow = 'inset 0 -3px 0 rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)';
  button.style.transform = 'translateY(0)';
  innerShadow.style.boxShadow = 'inset 0 2px 5px rgba(0, 0, 0, 0.2)';
});



// Add the chat button to the Google nav bar
const navBar = document.querySelector('.xhjkHe ');
navBar.appendChild(button);

// Check if Google search is in dark mode
const googleBody = document.querySelector('body');
const googleBackgroundColor = getComputedStyle(googleBody).backgroundColor;

// Apply dark mode styles to the iframe if Google search is in dark mode
if (googleBackgroundColor === 'rgb(32, 33, 36)') {
}

// Show/hide the iframe when the chat button is clicked
button.addEventListener('click', function () {
  if (iframe.style.display === 'none') {
    iframe.style.display = 'block';
  } else {
    iframe.style.display = 'none';
  }
});
