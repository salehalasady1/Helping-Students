
let classTable = [
  { color: 'brown', x: 35, y: 200, width: 100, height: 50 },
  { color: 'brown', x: 200, y: 200, width: 100, height: 50 },
  { color: 'brown', x: 365, y: 200, width: 100, height: 50 },
  { color: 'brown', x: 35, y: 320, width: 100, height: 50 },
  { color: 'brown', x: 200, y: 320, width: 100, height: 50 },
  { color: 'brown', x: 365, y: 320, width: 100, height: 50 },
  { color: 'brown', x: 35, y: 435, width: 100, height: 50 },
  { color: 'brown', x: 200, y: 435, width: 100, height: 50 },
  { color: 'brown', x: 365, y: 435, width: 100, height: 50 },
  //{ color: 'red', x: 50, y: 500, width: 100, height: 50 },
  //{ color: 'blue', x: 200, y: 500, width: 100, height: 50 },
 // { color: 'green', x: 350, y: 500, width: 100, height: 50 },
 // { color: 'red', x: 50, y: 500, width: 100, height: 50 },
  //{ color: 'blue', x: 200, y: 500, width: 100, height: 50 },
  //{ color: 'green', x: 350, y: 500, width: 100, height: 50 }
  { color: 'brown', x: 50, y: 65, width: 100, height: 50 },


];

let classStudent = [
{ color: 'red', x: 85, y: 270, size: 30},
{ color: 'blue', x: 250, y: 270, size: 30},
{ color: 'red', x: 415, y: 270, size: 30},
{ color: 'red', x: 85, y: 390, size: 30},
{ color: 'red', x: 250, y: 390, size: 30},
{ color: 'blue', x: 415, y: 390, size: 30},
{ color: 'red', x: 85, y: 505, size: 30},
{ color: 'blue', x: 250, y: 505, size: 30},
{ color: 'red', x: 415, y: 505, size: 30},
];

let maxHelpRequests = 7;
let helpRequests =  [];
let lives = 9;
let score = 0;
let highScore = 0;
let moralScore = 5;
let jobScore = 5;


function setup() {
  createCanvas(500, 600);
  //setInterval(generateHelpRequest, 1250);  // 1250 milliseconds = 1.25 seconds

}
//make the back button work
function draw() {
  if (state == 'start') {
    drawStartScreen();
  }
  else if (state == 'instructions') {
    drawInstructionsScreen();
  }
  else if (state == 'credits') {
    drawCreditsScreen();
  } else if (state == 'game') {
  background(220);
  drawPlayer(player); 
  movePlayer();
  interactWithStudent();
for(let table of classTable){
  drawClassTable(table);
  }
  for (let student of classStudent) {
    drawClassStudent(student); 
  }
  
  for(let i = helpRequests.length - 1; i >= 0; i--){
    let request = helpRequests[i];
    drawHelpRequest(request.student);
    request.timer--;
    if(request.timer <= 0){
      if (request.student.color == 'blue') {
        jobScore--;
        if(jobScore <= 0){
          state = 'betterMoral';
        }
      }
      if (request.student.color == 'red') {
          moralScore--;
          if(moralScore <= 0){
            state = 'badmoral';
          }   
      }
    if(request.timer <= 0){
      helpRequests.splice(i, 1);
      lives--;
      if(lives <= 0){
        state = 'gameover';
      }
    }
  }
}
  drawScore();
  drawLives(); 
} else if (state == 'gameover'){
  drawGameOverScreen();
}
else if (state == 'badmoral'){
  drawBadMoralScreen();
}
else if (state == 'betterMoral'){
  drawBetterMoralScreen();
}
  //for(let student of classStudent){
    //drawClassStudent(student);
   // if (helpRequests.includes(student)){
     // drawHelpRequest(student);
   // }
  // }
 // }
}
function mousePressed() {
  handleMousePressed();
  
  if (state == 'gameover') {
    // Check if "Back to Main Menu" button is clicked
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 100 && mouseY < height / 2 + 150) {
      resetGame();
    }
  } else if (state == 'badmoral') {
    // Check if "Back to Main Menu" button is clicked
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 100 && mouseY < height / 2 + 150) {
      resetGame();
    }
  } else if (state == 'betterMoral') {
    // Check if "Back to Main Menu" button is clicked
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 100 && mouseY < height / 2 + 150) {
      resetGame();
    }
  }
}
function generateHelpRequest(){
  if(helpRequests.length < maxHelpRequests){
    let student = random(classStudent);
    if (!helpRequests.some(request => request.student == student)){ 
      helpRequests.push({student: student, timer: 144}); //frames
    }
  }
}

function drawHelpRequest(student){
  fill('yellow');
  textSize(35);
  stroke('black');
  strokeWeight(2);
  text('!', student.x + 15, student.y - 15);
  
  strokeWeight(1);
  noStroke();
  fill(0);
}

function drawClassTable(classTable) {
  fill(classTable.color);
  rect(classTable.x, classTable.y, classTable.width, classTable.height);
}

function drawClassStudent(classStudent){
  fill(classStudent.color);
  ellipse(classStudent.x, classStudent.y, classStudent.size);

}

function drawScore() {

  fill(0);
  textSize(20);
  text(`Score: ${score}`, 400, 30);
  text(`High Score: ${highScore}`, 400, 60);
  text(`Moral Score: ${moralScore}`, 400, 90);
  text(`Job Score: ${jobScore}`, 400, 120);

}

function drawLives() {
  fill(0);
  textSize(20);
  text(`Lives: ${lives}`, 60, 30);
}

function drawGameOverScreen(){
  background('red');
  textSize(50);
  textAlign
  fill(255);
  text('GAME OVER', width / 2, height / 2 - 50);
  textSize(30);
  text(`Score: ${score}`, width / 2, height / 2);
  text(`High Score: ${highScore}`, width / 2, height / 2 + 50);

    fill('lightblue');
    rect(width / 2 - 100, height / 2 + 100, 200, 50);
    fill(0);
    textSize(20);
    text('Back to Main Menu', width / 2, height / 2 + 125);
}

function drawBadMoralScreen(){
  background('red');
  textSize(50);
  textAlign
  fill(255);
  text('GAME OVER', width / 2, height / 2 - 50);
  textSize(25);
  text('boo, you a bad teacher', width / 2, height / 2 - 125);
  textSize(30);
  text(`Score: ${score}`, width / 2, height / 2);
  text(`High Score: ${highScore}`, width / 2, height / 2 + 50);

    fill('lightblue');
    rect(width / 2 - 100, height / 2 + 100, 200, 50);
    fill(0);
    textSize(20);
    text('Back to Main Menu', width / 2, height / 2 + 125);
}

function drawBetterMoralScreen(){
  background('red');
  textSize(50);
  textAlign
  fill(255);
  text('GAME OVER', width / 2, height / 2 - 50);
  textSize(20);
  text('well.. you pissed off the rich.. you lost your job..', width / 2, height / 2 - 125);
  textSize(20);
  text(`Score: ${score}`, width / 2, height / 2);
  text(`High Score: ${highScore}`, width / 2, height / 2 + 50);

    fill('lightblue');
    rect(width / 2 - 100, height / 2 + 100, 200, 50);
    fill(0);
    textSize(20);
    text('Back to Main Menu', width / 2, height / 2 + 125);
}


function resetGame() {
  lives = 9;
  score = 0;
  helpRequests = [];
  state = 'start';
  player.x = 100;
  player.y = 25;
  moralScore = 5;
  jobScore = 5;
  
  }