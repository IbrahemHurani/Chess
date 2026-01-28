const board = document.querySelector('.board');
let knightPos = { row: 0, col: 0 };

function createBoard() {
    board.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const square = document.createElement('div');
            square.className = `square ${((r + c) % 2 === 0) ? 'white' : 'black'}`;
            square.dataset.row = r;
            square.dataset.col = c;

            square.ondragover = (e) => e.preventDefault();
            square.ondrop = () => handleDrop(r, c);

            if (knightPos.row === r && knightPos.col === c) {
                const knight = document.createElement('span');
                knight.className = 'knight';
                knight.draggable = true;
                knight.innerHTML = '♞';
                square.appendChild(knight);
            }
            board.appendChild(square);
        }
    }
}

async function handleDrop(targetRow, targetCol) {
    try {
        const res = await fetch('http://localhost:8080/validate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from: knightPos, to: { row: targetRow, col: targetCol } }),
        });

        const data = await res.json();

        if (data.isValid) {
            knightPos = { row: targetRow, col: targetCol };
            createBoard();
        } else {
            alert("Invalid Knight move!");
        }
    } catch (error) {
        console.error("Server error:", error);
    }
}
createBoard();