// Tic Tac Toe game logic using ECMAScript 6 features

// Game board representation
const gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Current player
let currentPlayer = 'X';

// Function to initialize the game board
const initializeGame = () => {
    const gameContainer = document.getElementById('game');
    gameBoard.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement('div');
            cellElement.addEventListener('click', () => playerMove(rowIndex, cellIndex));
            gameContainer.appendChild(cellElement);
        });
    });
};

// Function to handle player moves
const playerMove = (rowIndex, cellIndex) => {
    if (gameBoard[rowIndex][cellIndex] === '') {
        gameBoard[rowIndex][cellIndex] = currentPlayer;
        updateBoard();
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

// Function to update the game board display
const updateBoard = () => {
    const gameContainer = document.getElementById('game');
    let cellIndex = 0;
    gameBoard.forEach(row => {
        row.forEach(cell => {
            gameContainer.children[cellIndex].textContent = cell;
            cellIndex++;
        });
    });
};

// Function to check for a win or a draw
const checkWin = () => {
    // Win conditions
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    let winner = null;

    winConditions.forEach(condition => {
        const [a, b, c] = condition;
        if (gameBoard[Math.floor(a/3)][a%3] && gameBoard[Math.floor(a/3)][a%3] === gameBoard[Math.floor(b/3)][b%3] && gameBoard[Math.floor(a/3)][a%3] === gameBoard[Math.floor(c/3)][c%3]) {
            winner = gameBoard[Math.floor(a/3)][a%3];
        }
    });

    if (winner) {
        alert(`${winner} wins!`);
        initializeGame();
    } else if (!gameBoard.flat().includes('')) {
        alert("It's a draw!");
        initializeGame();
    }
};

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initializeGame);
