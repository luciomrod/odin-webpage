document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('grid-container');
    const resetButton = document.getElementById('reset-button');

    // Initial grid dimensions
    let gridSize = 16;

    // Function to create the grid
    function createGrid(size) {
        // Clear existing grid
        container.innerHTML = '';

        // Set CSS properties for container
        container.style.setProperty('--grid-size', size);

        // Create new grid
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseenter', function() {
                setColor(square);
            });
            container.appendChild(square);
        }
    }

    // Function to set color on hover
    function setColor(element) {
        // Random RGB color
        let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        element.style.backgroundColor = randomColor;

        // Progressive darkening effect
        let opacity = parseFloat(element.style.opacity) || 0;
        element.style.opacity = opacity + 0.1;
    }

    // Initial grid creation
    createGrid(gridSize);

    // Event listener for reset button
    resetButton.addEventListener('click', function() {
        let newSize = prompt('Enter number of squares per side (max 100):');
        newSize = parseInt(newSize);
        if (newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    });
});
