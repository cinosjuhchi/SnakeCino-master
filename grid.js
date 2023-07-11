const GRID_SIZE = 24

export function randomGridPosition() {
    return {
        c: Math.floor(Math.random() * GRID_SIZE) + 1,
        s: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.c < 1 || position.c > GRID_SIZE ||
        position.s < 1 || position.s > GRID_SIZE 
    )
}