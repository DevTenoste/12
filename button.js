// Get the button element
const button = document.getElementById('test');

// Set initial state and pattern counter
let currentPattern = "Start";
let isButtonClickable = true;

function handleClick() {
    if (!isButtonClickable) {
      return; // Exit the function if button is not clickable
}
}
// Function to handle the click event
function handleClick() {
  // Update the button content
  button.innerHTML = `${currentPattern}`;

  // Toggle between patterns and update the background color
  if (currentPattern === "Start") {
    button.style.backgroundColor = 'green';
    button.classList.remove('button-pattern-1');
    button.classList.add('button-pattern-2');
    currentPattern = "Stop";
    yourJavaScriptFunction();
  } else {
    button.style.backgroundColor = 'red';
    button.classList.remove('button-pattern-2');
    button.classList.add('button-pattern-1');
    currentPattern = "Start";
    yourJavaScriptFunction();
  }
    // Disable the button temporarily
    isButtonClickable = false;

    // Enable the button after a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
    isButtonClickable = true;
    }, 10000);
  
}


// Attach the click event listener to the button
button.addEventListener('click', handleClick);

function yourJavaScriptFunction() {
    // Add your JavaScript code here
    console.log("Executing JavaScript for the first pattern...");
    // Additional code logic
    fetch('./server.js')
    .then(response => response.text())
    .then(code => {
      eval(code); // Exécute le code JavaScript chargé
    })
    .catch(error => {
      console.error('Erreur lors du chargement du fichier JavaScript:', error);
    });
  }