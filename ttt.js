let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () => {
    turn0=true;
    enaablebtn();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0 = false;
        }
        else{
            box.innerText="x";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const disablebtn = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
};  
const enaablebtn = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};  


const showwinner = (winner) =>{
    msg.innerText= `CONGRAJULATIONS WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
   };
   



    const checkwinner = () => {
        for(let pattern of winpatterns){
            let pos1 =boxes[pattern[0]].innerText;
            let pos2 =boxes[pattern[1]].innerText;
            let pos3 =boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 !="" && pos3 != ""){
                if(pos1===pos2 && pos2===pos3){
                    console.log("winner",pos1);
                   showwinner(pos1); 
            }

        }
    }
};


newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);








