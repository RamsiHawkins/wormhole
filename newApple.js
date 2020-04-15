export default function newApple(apple,wormhole,snake,grid) {

  // canvas is 400x400 which is 25x25 grids 
  apple.x = getRandomInt(0, 25) * grid;
  apple.y = getRandomInt(0, 25) * grid;

  // check collisions with wormholes
  if (wormhole.x1 === apple.x && wormhole.y1 === apple.y) {
    newApple(apple,wormhole,snake,grid);
  }
  if (wormhole.x2 === apple.x && wormhole.y2 === apple.y) {
    newApple(apple,wormhole,snake,grid);
  }

  // check collision with all snake cells
  for (var i = 0; i < snake.cells.length; i++) {
    if (apple.x === snake.cells[i].x && apple.y === snake.cells[i].y) {
      newApple(apple,wormhole,snake,grid);
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}