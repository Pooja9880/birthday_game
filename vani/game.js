const inputElement = document.getElementById("input");
const cakeContainer = document.getElementById("cake-container");
const birthdayWish = document.getElementById("birthdayWish");
const alphabetContainer = document.getElementById("game-container");

let vaniEntered = false; // Variable to track if "VANI" is entered

// Function to create a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to move an element randomly within the screen
function moveRandomly(element) {
    const screenHeight = window.innerHeight - 100; // Subtract the element's height
    const screenWidth = window.innerWidth - 100; // Subtract the element's width

    const randomX = getRandomNumber(0, screenWidth);
    const randomY = getRandomNumber(0, screenHeight);

    element.style.top = randomY + "px";
    element.style.left = randomX + "px";
}

// Function to hide the balloons
function hideBalloons() {
    const balloons = document.querySelectorAll(".alphabet");
    balloons.forEach(function (balloon) {
        balloon.style.display = "none";
    });

    // Display the cake, birthday wish, and crackers
    cakeContainer.style.display = "block";
    birthdayWish.style.display = "block";
    createCrackers(100);
}

// Create a set of alphabet balloons (A to Z), position them randomly, and add click events
for (let charCode = 65; charCode <= 90; charCode++) {
    const alphabet = document.createElement("div");
    alphabet.classList.add("alphabet");
    alphabet.textContent = String.fromCharCode(charCode);
    alphabetContainer.appendChild(alphabet);

    // Move each alphabet randomly
    moveRandomly(alphabet);

    // Add a click event to each alphabet
    alphabet.addEventListener("click", function () {
        inputElement.value += this.textContent;
        if (inputElement.value.toLowerCase() === "vani") {
            // Correct input, hide the balloons and reveal the cake and birthday wish
            vaniEntered = true; // Mark "VANI" as entered
            hideBalloons();
        }
        // Move the clicked alphabet randomly
        moveRandomly(this);
    });
}

// Add an input event to listen for "VANI" and hide balloons immediately
inputElement.addEventListener("input", function () {
    if (!vaniEntered && inputElement.value.toLowerCase() === "vani") {
        vaniEntered = true; // Mark "VANI" as entered
        hideBalloons();
    }
});

// Function to create and display crackers
function createCrackers(numberOfCrackers) {
    const crackersContainer = document.createElement("div");
    crackersContainer.id = "crackers";
    cakeContainer.appendChild(crackersContainer);

    for (let i = 0; i < numberOfCrackers; i++) {
        const cracker = document.createElement("div");
        cracker.classList.add("cracker");
        crackersContainer.appendChild(cracker);

        // Position each cracker randomly
        moveRandomly(cracker);
    }
}
