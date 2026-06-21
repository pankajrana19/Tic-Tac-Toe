let boxes = document.querySelectorAll(".box");
let turnO = true;
let moveCount = 0;


const arrays = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[0, 3, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log('Box was clicked')
        if (turnO) {
            box.style.color = "green";
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.style.color = "blue"
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        moveCount++;
        checkWinner()
    });
})
const checkWinner = () => {
    if (moveCount === 9) {
        msg.innerText = "Game Draw!";
        disableBoxes();
    }
    for(let pattern of arrays){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1 != '' && posVal2 != '' && posVal3 != '' ){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                showWinner(posVal1);
            }
        }
    }
}
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
        moveCount = 0;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}
const msg = document.getElementById('msg');
const showWinner = (winner)=>{
    msg.innerText = `The Winner of the Game is ${winner}`
    disableBoxes();
}

const resetGame = ()=>{
    turnO = true;
    enableBoxes()
    msg.innerText = '';
}
document.getElementById('reset').addEventListener('click',resetGame)
