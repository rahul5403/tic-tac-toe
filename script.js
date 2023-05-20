const boxes = Array.from(document.getElementsByClassName("box"));
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click',reset)

function reset(){
    winBoxesIds = [];
    areas.forEach((val, index)=>{   
        areas[index] = null;
    })
    boxes.forEach(box=>{
        box.innerHTML ='';
        box.style.background = '';
        box.style.cursor = 'pointer';
    })

    headertext.innerHTML = "Let's Play the Game..."
    headertext.style.background = '';

}

const headertext = document.getElementById("play")
const areas = [null,null,null,null,null,null,null,null,null];
const o_text = "O"
const x_text = "X"

let currentPlayer = o_text;
let winBoxesIds = [];

function bindClickEvent(){
    boxes.forEach((box)=>{
        box.addEventListener('click' , handleBoxClick);
    })
}
bindClickEvent();

function handleBoxClick(e){
    const id = e.target.id;
    if(!areas[id]){
        areas[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;
        if(currentPlayer === o_text){
            e.target.style.color = 'red';

        }
        else{
            e.target.style.color = 'green';

        }
        

        if(hasPlayerWon(currentPlayer)){
            headertext.innerHTML = `${currentPlayer} has won!!`;
            headertext.style.padding = '10px 15px';
            headertext.style.background = `lightgreen`;
            changeWinBoxesBg();
            return;
        }

        currentPlayer = currentPlayer === o_text ? x_text: o_text;
        let first = document.getElementById("first")
        let second = document.getElementById("second")
        if(currentPlayer === o_text){
            first.classList.add("pturn");
            second.classList.remove("pturn");
        }
        else{
            second.classList.add("pturn");
            first.classList.remove("pturn");
            }

    }
}

function changeWinBoxesBg(){
    winBoxesIds.forEach(id=>{
        boxes[id].style.background= 'lightgreen';
        boxes[id].style.transition= '0.9s';
    })
    boxes.forEach(box=>{
        box.style.cursor = 'not-allowed'
    })
}

function hasPlayerWon(cPlayer){
    if(areas[0]===cPlayer){
        if(areas[1]===cPlayer && areas[2]===cPlayer){
            winBoxesIds = [0,1,2];
            return true;
        }
        if(areas[3]===cPlayer && areas[6]===cPlayer){
            winBoxesIds = [0,3,6];
            return true;
        }
        if(areas[4]===cPlayer && areas[8]===cPlayer){
            winBoxesIds = [0,4,8];
            return true;
        }
    }
    if(areas[4]===cPlayer){
        if(areas[1]===cPlayer && areas[7]===cPlayer){
            winBoxesIds = [4,1,7];
            return true;
        }
        if(areas[2]===cPlayer && areas[6]===cPlayer){
            winBoxesIds = [6,4,2];
            return true;
        }
        if(areas[3]===cPlayer && areas[5]===cPlayer){
            winBoxesIds = [3,4,5];
            return true;
        }
    }
    if(areas[8]===cPlayer){
        if(areas[7]===cPlayer && areas[6]===cPlayer){
            winBoxesIds = [6,7,8];
            return true;
        }
        if(areas[5]===cPlayer && areas[2]===cPlayer){
            winBoxesIds = [2,5,8];
            return true;
        }
    }
}

 
