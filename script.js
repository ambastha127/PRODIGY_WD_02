let boxes = document.querySelectorAll("#box");
let reset = document.getElementById("reset");
let newG = document.getElementById("new-game");
let msgCont = document.querySelector(".msg");
let msg = document.getElementById("message");

let turnO = true; // playerX , playerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide") 
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerHTML="";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations , The Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);

            }
        }
    }
};

newG.addEventListener('click',resetGame)
reset.addEventListener('click', resetGame)