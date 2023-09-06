
let round = 1;
console.log("This is round: 1")

function generateRandomBox() {
  return Math.random() < 0.5 ? "box1" : "box2";
}

function nextRound() {
  //alert('You passed round '+ round)
  round++;
  console.log("This is round: "+round);
  document.getElementById('score').innerHTML = "This is round: "+ round.toString();

  document.getElementById("box1").innerHTML = "";
  document.getElementById("box2").innerHTML = "";
  rounds();


}

function rounds(){
    i = round;
    while( i > 0 ){
        addImages();
        --i
    }
    oddImage();

}

function addImages() {
    x = xPosition();
    y = yPosition();
    createImage(x,y,"box1");
    createImage(x,y,"box2");
    }

function createImage(x,y,box) {
    const image = new Image();
    image.src = 'logo.png';
    image.alt = 'logo';
    image.style.position = 'absolute';
    image.style.top = x;
    image.style.left = y;
    document.getElementById(box).appendChild(image);
  
}
function oddImage() {
    //const image = document.getElementById('oddImage'); 
    const image = new Image('60px', '60px');
    image.id = 'odd_image'
    image.src = 'logo.png';
    image.alt = 'logo';
    image.style.position = 'absolute';
    image.style.top = xPosition();
    image.style.left = yPosition();
    //image.style.visibility = 'visible';
    image.onclick = nextRound;
    document.getElementById('box2').appendChild(image);
}

function xPosition(){
    seed = (Math.random()+Math.random())/2*85;
    value = seed.toString() + '%'
    return value
}
function yPosition(){
    seed = (Math.random()+Math.random())/2*85;
    value = seed.toString() + '%'
    return value
}

function startGame() {
    round = 1;
    document.getElementById('score').innerHTML = "This is round: 1";
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    //alert('Button was clicked!');
    addImages();
    oddImage();
}



function hint(){
    const image = document.getElementById('odd_image');
    x = image.style.top
    y = image.style.left
    image.style.border = "solid 30px rgb(230, 230, 47)";
    image.style.top = x;
    image.style.left = y;
    setTimeout(() => {  
        
        image.style.border = "solid 0px rgb(230, 230, 47)";
        image.style.top = x;
        image.style.left = y;
    }, 500);
    
}