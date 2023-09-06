let round: number = 1;
console.log("This is round: 1");

function generateRandomBox(): string {
  return Math.random() < 0.5 ? "box1" : "box2";
}

function nextRound(): void {
    //alert('You passed round ' + round);
    round++;
    console.log("This is round: " + round);
    const scoreBoard  = document.getElementById('score');
    if(scoreBoard){
      scoreBoard.innerHTML = "This is round: "+ round.toString();
    }
    clearBoxes();
    rounds();
  }

  function clearBoxes(): void {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    if (box1 && box2) {
      box1.innerHTML = "";
      box2.innerHTML = "";
    }
}


function rounds(): void {
  let i: number = round;
  while (i > 0) {
    addImages();
    i--;
  }
  oddImage();
}

function addImages(): void {
  const x: string = xPosition();
  const y: string = yPosition();
  createImage(x, y, "box1");
  createImage(x, y, "box2");
}

function createImage(x: string, y: string, box: string): void {
  const image: HTMLImageElement = new Image() as HTMLImageElement;
  image.src = 'logo.png';
  image.alt = 'logo';
  image.style.position = 'absolute';
  image.style.top = x;
  image.style.left = y;
  const boxElement: HTMLElement | null = document.getElementById(box);
  if (boxElement) {
    boxElement.appendChild(image);
  }
}

function oddImage(): void {
  const image: HTMLImageElement = new Image(60, 60) as HTMLImageElement;
  image.id = 'odd_image';
  image.src = 'logo.png';
  image.alt = 'logo';
  image.style.position = 'absolute';
  image.style.top = xPosition();
  image.style.left = yPosition();
  //image.style.visibility = 'visible';
  image.onclick = nextRound;
  const box2Element: HTMLElement | null = document.getElementById('box2');
  if (box2Element) {
    box2Element.appendChild(image);
  }
}

function xPosition(): string {
  const seed: number = (Math.random() + Math.random()) / 2 * 85;
  const value: string = seed.toString() + '%';
  return value;
}

function yPosition(): string {
  const seed: number = (Math.random() + Math.random()) / 2 * 85;
  const value: string = seed.toString() + '%';
  return value;
}

function startGame(): void {
    

    round = 1;
    const scoreBoard  = document.getElementById('score');
    
    if(scoreBoard)
    {
      scoreBoard.style.textAlign = "center";
      scoreBoard.innerHTML = "<strong> ...Using TypeScript...</strong>  </br> This is round: "+ round.toString();
    }

    clearBoxes();
    addImages();
    oddImage();
  }




function hint(): void{
  const image : HTMLElement | null = document.getElementById('odd_image');
  
  if (image) {

        const x = image.style.top;
        const y = image.style.left;
        image.style.border = "solid 30px rgb(230, 230, 47)";
        
        image.style.top = x;
        image.style.left = y;

        setTimeout(() => {

            image.style.border = "solid 0px rgb(230, 230, 47)";
             image.style.top = x;
            image.style.left = y;
        }, 500);

    }
  


}