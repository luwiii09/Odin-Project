document.addEventListener('DOMContentLoaded', () => {
  const sketchContainer = document.querySelector('.sketchContainer');
  const resetButton = document.querySelector('.resetButton');
  const sketchContainerSize = 600;

  function createGrid(gridSize) {
    sketchContainer.innerHTML = '';

    const cellSize = sketchContainerSize / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('style', `width: ${cellSize}px; height: ${cellSize}px`);

      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = '#88AB8E';
      });
      sketchContainer.appendChild(cell);
    }
  }

  resetButton.addEventListener('click', () => {
    let gridSize = prompt(
      'Enter the number of squares per side for the new grid (maximum 100):'
    );
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
      alert('Please enter a valid number between 1 to 100');
    } else {
      createGrid(gridSize);
    }
  });

  createGrid(16);
});
