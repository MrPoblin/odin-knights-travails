const boardSize = 8;

const startPos = [0, 0];
const endPos = [7, 7];

function possibleMoves(current, travelled){
    const moveSet = [
        [2, 1],
        [1, 2],
        [2, -1],
        [1, -2],
        [-2, -1],
        [-1, -2],
        [-2, 1], 
        [-1, 2],
    ];
    const possible = [];
    moveSet.forEach(move => {
        const newPos = [current[0] + move[0], current[1] + move[1]];
        if(
            (newPos[0] < boardSize) &&
            (newPos[0] >= 0) &&
            (newPos[1] < boardSize) &&
            (newPos[1] >= 0) &&
            (!hasTravelled(newPos, travelled))
        )possible.push(newPos);
    });
    return possible;
}

function hasTravelled(move, travelled){
    travelled.forEach(element => {
        if (move[0] === element[0] && move[1] === element[1]){
            return true;
        }  
    });
    return false;
}

function knightMoves(start, end){
    const travelled = [];

    const queue = [];
    
    queue.push([start, 0, []]);

    while(queue.length > 0){
        const current = queue.shift();
        const currentPos = current[0];
        let distance = current[1];
        if(currentPos[0] === end[0] && currentPos[1] === end[1]){
            return distance;
        }
        distance += 1;
        travelled.push(currentPos);
        const moves = possibleMoves(currentPos, travelled);
        moves.forEach(move => {
            queue.push([move, distance]);
        });
    }   

    
}

console.log(knightMoves(startPos, endPos));