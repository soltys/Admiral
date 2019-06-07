/* eslint-disable array-element-newline */
/* eslint-disable no-magic-numbers */

export default {
    board: {
        numberOfColumns: 12,
        numberOfRows: 18,
        map: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0],
            [0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        ]
    },
    pawns: [
        {
            typeId: 100001,
            name: 'TestShip1',
            range: 1,
            destroy: [100002],
            destroyedBy: [100001]
        },
        {
            typeId: 100002,
            name: 'TestShip2',
            range: 4,
            destroy: [],
            destroyedBy: [100002, 100001]
        }

    ]
}
