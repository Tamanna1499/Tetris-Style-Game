export const grid_width = 20;
export const grid_height = 20;

export const createGrid = () =>
    Array.from(Array(grid_height), ()=>
    new Array(grid_width).fill([0, 'clear'])
    )