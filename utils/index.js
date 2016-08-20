export const makeGrid = (height, width) => {
    let makeRow = (rowIndex, rowWidth) => {
        let cells = [];
        for (let i = 1; i <= rowWidth; i++) {
            let coordinates = [ rowIndex, i ];

            cells.push(coordinates)
        }

        return cells
    };

    let grid = [];
    for (let i = 1; i <= height; i++) {
        grid.push(
            makeRow( i, width )
        )
    } 

    return grid
};

export const makeGrid2 = (height, width, cell) => {
    let makeRow = (rowIndex, rowWidth) => {
        let cells = [];
        for (let i = 1; i <= rowWidth; i++) {
            let coordinates = [ rowIndex, i ];
            
            cells.push(cell(rowIndex, i))
        }

        return cells
    };

    let grid = [];
    for (let i = 1; i <= height; i++) {
        grid.push(
            makeRow( i, width )
        )
    } 

    return [].concat.apply([], grid);
};
