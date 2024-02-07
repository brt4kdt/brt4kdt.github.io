// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get the button element
var changeBackgroundButton = document.getElementById('changeBackgroundButton');

// Add click event listener to the button
changeBackgroundButton.addEventListener('click', function() {
    // Get a random color
    var randomColor = getRandomColor();
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
