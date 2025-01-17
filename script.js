let currentplayer = "X"
let globalVar = 0;
let globalVar2 = 0;
let draw = 0;
let array = Array(9).fill(null)
let don = 0;

function scores() {
    if (currentplayer === "X" ? globalVar += 1 : globalVar2 += 1)
        document.getElementById("score-x").innerText = `${globalVar} WINS`
    document.getElementById("score-o").innerText = `${globalVar2} WINS`
}
function drawcheck(){
    draw += 1;
    document.getElementById("draws").innerText = `${draw} Draws`
    document.getElementById("status").style.display = "flex"
    document.getElementById("status").innerText = "Draw"
}
function checkwinner() {
    if (
        (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
        (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||
        (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
        (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
        (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
        (array[2] !== null && array[2] == array[5] && array[5] == array[8]) ||
        (array[2] !== null && array[2] == array[4] && array[4] == array[6]) ||
        (array[0] !== null && array[0] == array[4] && array[4] == array[8])
    ) {
        don = 1;
        document.getElementById("status").style.display = "flex"
        document.getElementById("status").innerText = ` ${currentplayer} WON`
        document.getElementById("turn-id").style.display = "none";
        scores()

        return;
    }
    if (!array.some((el) => el == null)) {
        drawcheck()
        document.getElementById("turn-id").style.display = "none";
    }
}



function handleclick(el) {
    let id = el.id
    if (don == 1) return
    if (array[id] !== null) return
    array[id] = currentplayer
    el.innerText = currentplayer;
    checkwinner()
    if(currentplayer === "O"){
        document.getElementById("turn-x").style.backgroundColor = "rgb(255, 118, 118)"
        el.style.color = "rgb(37, 187, 0)"
    } else {
        document.getElementById("turn-x").style.backgroundColor = "wheat"
    }
    if(currentplayer === "X"){
        document.getElementById("turn-o").style.backgroundColor = "rgb(255, 118, 118)"
        el.style.color = "rgb(219, 0, 0)"
    } else {
        document.getElementById("turn-o").style.backgroundColor = "wheat"
    }
    if (currentplayer === "X" ? currentplayer = "O" : currentplayer = "X") {
        return
    }


}

function reset() {
    array = Array(9).fill(null)
    let columns = document.getElementsByClassName("column")
    for (let i = 0; i <= 8; i++) {
        columns[i].innerText = ""
        currentplayer = "X"
        don = 0;
         document.getElementById("turn-x").style.backgroundColor = "rgb(255, 118, 118)"
         document.getElementById("turn-o").style.backgroundColor = "wheat"
        document.getElementById("grid").style.display = "grid";
        document.getElementById("status").innerText = ""
        document.getElementById("status").style.display = "none"
        document.getElementById("turn-id").style.display = "flex";
    }
}
let btn = document.getElementById("btn")
btn.addEventListener("click", reset)


