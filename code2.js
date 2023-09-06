var round = 1;
console.log("This is round: 1");
function generateRandomBox() {
    return Math.random() < 0.5 ? "box1" : "box2";
}
function nextRound() {
    //alert('You passed round ' + round);
    round++;
    console.log("This is round: " + round);
    var scoreBoard = document.getElementById('score');
    if (scoreBoard) {
        scoreBoard.innerHTML = "This is round: " + round.toString();
    }
    clearBoxes();
    rounds();
}
function clearBoxes() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    if (box1 && box2) {
        box1.innerHTML = "";
        box2.innerHTML = "";
    }
}
function rounds() {
    var i = round;
    while (i > 0) {
        addImages();
        i--;
    }
    oddImage();
}
function addImages() {
    var x = xPosition();
    var y = yPosition();
    createImage(x, y, "box1");
    createImage(x, y, "box2");
}
function createImage(x, y, box) {
    var image = new Image();
    image.src = 'logo.png';
    image.alt = 'logo';
    image.style.position = 'absolute';
    image.style.top = x;
    image.style.left = y;
    var boxElement = document.getElementById(box);
    if (boxElement) {
        boxElement.appendChild(image);
    }
}
function oddImage() {
    var image = new Image(60, 60);
    image.id = 'odd_image';
    image.src = 'logo.png';
    image.alt = 'logo';
    image.style.position = 'absolute';
    image.style.top = xPosition();
    image.style.left = yPosition();
    //image.style.visibility = 'visible';
    image.onclick = nextRound;
    var box2Element = document.getElementById('box2');
    if (box2Element) {
        box2Element.appendChild(image);
    }
}
function xPosition() {
    var seed = (Math.random() + Math.random()) / 2 * 85;
    var value = seed.toString() + '%';
    return value;
}
function yPosition() {
    var seed = (Math.random() + Math.random()) / 2 * 85;
    var value = seed.toString() + '%';
    return value;
}
function startGame() {
    round = 1;
    var scoreBoard = document.getElementById('score');
    if (scoreBoard) {
        scoreBoard.style.textAlign = "center";
        scoreBoard.innerHTML = "<strong> ...Using TypeScript...</strong>  </br> This is round: " + round.toString();
    }
    clearBoxes();
    addImages();
    oddImage();
}
function hint() {
    var image = document.getElementById('odd_image');
    if (image) {
        var x_1 = image.style.top;
        var y_1 = image.style.left;
        image.style.border = "solid 30px rgb(230, 230, 47)";
        image.style.top = x_1;
        image.style.left = y_1;
        setTimeout(function () {
            image.style.border = "solid 0px rgb(230, 230, 47)";
            image.style.top = x_1;
            image.style.left = y_1;
        }, 500);
    }
}
