
export const defaultLetters = () => resetLetters([]);
export const defaultBoard = () => resetBoard([]);

export function resetLetters(letters) {
    "abcdefghijklmnñopqrstuvwxyz".toUpperCase().split("").forEach((i) => {
        letters[i] = "";
    });

    return letters;
}

export function resetBoard(board) {
    for (let i = 0; i < 5; i++) {
        board.push([]);
        for (let j = 0; j < 5; j++) {
            board[i].push(["", ""]);
        }
    }
    return board;
}