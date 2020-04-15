export default function newWormholes(apple,wormhole,snake,grid) {
  wormhole.x1 = getRandomInt(0, 25) * grid;
  wormhole.y1 = getRandomInt(0, 25) * grid;
  
  wormhole.x2 = getRandomInt(0, 25) * grid;
  wormhole.y2 = getRandomInt(0, 25) * grid;
  
  // check collisions with apple
  if (wormhole.x1 === apple.x && wormhole.y1 === apple.y) {
    newWormholes();
  }
  if (wormhole.x2 === apple.x && wormhole.y2 === apple.y) {
    newWormholes();
  }
  
  // check collision with all snake cells after this one (modified bubble sort)
  for (var i = 0; i < snake.cells.length; i++) {
        
    // if wormhole 1 occupies same space as a body part redraw, unconfirmed
    if (wormhole.x1 === snake.cells[i].x && wormhole.y1 === snake.cells[i].y) {
      newWormholes();
    }
  
    // if wormhole 1 occupies same space as a body part redraw, unconfirmed
    if (wormhole.x2 === snake.cells[i].x && wormhole.y2 === snake.cells[i].y) {
      newWormholes();
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}