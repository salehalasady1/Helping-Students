let state = 'start';

function drawStartScreen() {
  background('white');
  textSize(50);
  textAlign(CENTER, CENTER);

  // Draw Play button
  fill('lightblue');
  rect(width / 2 - 100, height / 2 - 60, 200, 50);
  fill(0);
  text('Play', width / 2, height / 2 - 35);

  // Draw Instructions button
  fill('lightblue');
  rect(width / 2 - 145, height / 2, 280, 50);
  fill(0);
  text('Instructions', width / 2, height / 2 + 25);

  // Draw Credits button
  fill('lightblue');
  rect(width / 2 - 100, height / 2 + 60, 200, 50);
  fill(0);
  text('Credits', width / 2, height / 2 + 85);
}

//draw instructions menu screen, when clicked it will show the instructions

function drawInstructionsScreen() {
  background('white');
  textSize(50);
  textAlign(CENTER, CENTER);

  // Draw Back button
  fill('lightblue');
  rect(width / 2 - 100, height / 2 + 60, 200, 50);
  fill(0);
  text('Back', width / 2, height / 2 + 85);

  //Instructions
  fill(0);
  textSize(20);
  text('Story of the game:', width / 2, height / 2 - 225);
  text('You are taking the role as a substitute teacher and', width / 2, height / 2 - 200);
  text('you have no clue of how to help the students.', width / 2, height / 2 - 180);
  text('Students with ! above their head needs help', width / 2, height / 2 - 160);
  text('Blue students are the ones that has influential parents,', width / 2, height / 2 - 140);
  text('meaning you are more likely to keep your job', width / 2, height / 2 - 120);
  text('Red students are the ones that', width / 2, height / 2 - 100);
  text('has parents that are less influential. GOOD LUCK', width / 2, height / 2 - 80);
  text('HOW TO PLAY:', width / 2, height / 2 - 50);
  text('Use WASD to move the player', width / 2, height / 2 - 25);
  text('Press SPACE to interact with students', width / 2, height / 2);
  text('Press ESC to go back to main menu', width / 2, height / 2 + 25);

}

function drawCreditsScreen() {
  background('white');
  textSize(50);
  textAlign(CENTER, CENTER);

  // Draw Back button
  fill('lightblue');
  rect(width / 2 - 100, height / 2 + 60, 200, 50);
  fill(0);
  text('Back', width / 2, height / 2 + 85);

  //Credits
  fill(0);
  textSize(20);
  text('Credits: Saleh', width / 2, height / 2 - 225);
  text('With help by Christian and Sara', width / 2, height / 2 - 200);
  text('And Co-pilot as a "sparringspartner"', width / 2, height / 2 - 180);
  text('Thank you for playing', width / 2, height / 2 - 160);
  
}


function handleMousePressed() {
    if (state == 'start') {
      // Check if Play button is clicked
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100) {
        if (mouseY > height / 2 - 60 && mouseY < height / 2 - 10) {
          state = 'game';
          setInterval(generateHelpRequest, 1250);  // 1250 milliseconds = 1.25 seconds

        } else if (mouseY > height / 2 && mouseY < height / 2 + 50) {
          state = 'instructions';
        } else if (mouseY > height / 2 + 60 && mouseY < height / 2 + 110) {
          state = 'credits';
        } else if (state == 'instructions') {
         if(mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 60 && mouseY < height / 2 + 110){
           state = 'start';
         }  
        }
      }
    }else if (state == 'instructions') {
         if(mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 60 && mouseY < height / 2 + 110){
           state = 'start';
         }
         
    }else if (state == 'credits') {
      if(mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 60 && mouseY < height / 2 + 110){
        state = 'start';
    }
  }
}

function keyPressed() {
  if (keyCode == ESCAPE) {
    resetGame();
  }
}