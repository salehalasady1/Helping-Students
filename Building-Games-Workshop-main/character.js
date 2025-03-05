let player = {
  x: 100,
  y: 25,
  size: 30,
  color: 'red'
};



// Draw player (circle)
function drawPlayer(player) {
  fill(player.color);
  ellipse(player.x, player.y, player.size);
}

// Move player with WASD + Collision Detection for Tables + Keep Inside Screen
function movePlayer() {
  let newX = player.x;
  let newY = player.y;

  if (keyIsDown(87) && player.y - player.size / 2 > 0) { // W key (Up)
    newY -= 4;
  }
  if (keyIsDown(83) && player.y + player.size / 2 < height) { // S key (Down)
    newY += 4;
  }
  if (keyIsDown(65) && player.x - player.size / 2 > 0) { // A key (Left)
    newX -= 4;
  }
  if (keyIsDown(68) && player.x + player.size / 2 < width) { // D key (Right)
    newX += 4;
  }

  // Only move if no table collision
  if (!isCollidingWithTable(newX, newY, player.size)) {
    player.x = newX;
    player.y = newY;
  }
}

function interactWithStudent() { 
  if (keyIsDown(32)) { // SPACE key
    for (let i = 0; i < helpRequests.length; i++) {
      let request = helpRequests[i];
      let student = request.student;
      let distance = dist(player.x, player.y, student.x, student.y);
      if (distance < player.size) {
        helpRequests.splice(i, 1);
        score++;
        if(student.color == 'red'){
          moralScore++;
        }
        if(student.color == 'blue'){
          jobScore++;
        }
        if (score > highScore) {
          highScore = score;
        }
        break;
      }
    }
  }
}
/*
noter for interactWithStudent
- Check if the E key is pressed
- Loop through all helpRequests
- Calculate the distance between the player and the student
- If the distance is less than the player's size, remove the student from helpRequests
- Break the loop to avoid removing multiple students

*/

// Collision detection function for tables
function isCollidingWithTable(newX, newY, size) {
  for (let table of classTable) {
    let halfSize = size / 2; // Player is a circle, so check from center

    let tableLeft = table.x;
    let tableRight = table.x + table.width;
    let tableTop = table.y;
    let tableBottom = table.y + table.height;

    let playerLeft = newX - halfSize;
    let playerRight = newX + halfSize;
    let playerTop = newY - halfSize;
    let playerBottom = newY + halfSize;

    // Check if player's edges overlap with table's edges
    if (
      playerRight > tableLeft &&
      playerLeft < tableRight &&
      playerBottom > tableTop &&
      playerTop < tableBottom
    ) {
      return true; // Collision 
    }
  }
  return false; // ingen collision
}