const GRID_SIZE = 20

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y == pos2.y
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}

export function gridCenter() {
    return (
        {
            x: Math.floor(GRID_SIZE / 2),
            y: Math.floor(GRID_SIZE / 2)
        }
    )
}

export function getBoardSize() {
    return GRID_SIZE
}