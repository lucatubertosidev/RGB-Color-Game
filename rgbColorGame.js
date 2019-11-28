let squaresNumber = 6
let colors = [];
let pickedColor;
let squares = document.getElementsByClassName('square');
let colorDisplay = document.getElementById('colorDisplay');
let message = document.getElementById('message');
let h1 = document.getElementsByTagName('h1')[0];
let newColors = document.getElementById('new-colors')
let modeBtn = document.getElementsByClassName('mode');

init();

function init() {
    setupButtons();
    setupSquares();
    reset();
};

function setupButtons() {
    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener('click', function () {
            modeBtn[0].classList.remove('selected');
            modeBtn[1].classList.remove('selected');
            this.classList.add('selected');
            // Give the correct number of squares based on game difficulty
            this.textContent === 'Easy' ? squaresNumber = 3 : squaresNumber = 6;
            reset();
        });
    };
};

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                message.textContent = 'Correct!';
                newColors.textContent = 'Play again?'
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = 'Try Again';
            };
        });
    };
};

function reset() {
    colors = generateColors(squaresNumber);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = 'steelblue';
    message.textContent = '';
    newColors.textContent = 'New Colors';
    // Hide squares based on game difficulty
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        };
    };
};

newColors.addEventListener('click', function () {
    reset();
})

const changeColor = color => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    };
};

function pickColor() {
    let randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
};

function generateColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    };
    return arr;
};

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
};