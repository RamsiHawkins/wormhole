export default function drawWormholes(context, wormhole, grid) {
    context.fillStyle = 'black';
    context.fillRect(wormhole.x1, wormhole.y1, grid, grid);
    context.fillStyle = 'black';
    context.fillRect(wormhole.x2, wormhole.y2, grid, grid);
}