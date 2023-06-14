const div = document.querySelector(".grid");
let size = 16; //default size of grid

for (let i = 0; i < 16; i++) {
    const newdiv = document.createElement("div");
    for (let l = 0; l < 16; l++) {
        const childdiv = document.createElement("div");
        newdiv.appendChild(childdiv);
        childdiv.addEventListener("mouseover", function () {
            childdiv.style.backgroundColor = "#C9D5B5";
        });
        childdiv.classList.add("inside");
    }
    newdiv.classList.add("container");
    div.appendChild(newdiv);
}

let choice;
const butt = document.querySelector("button");
const rain = document.querySelector(".rain");

rain.addEventListener("click", function(){
    const ins = document.querySelectorAll(".inside");
    ins.forEach(function (childdiv)
    {
        childdiv.addEventListener("mouseover", function () {
        r1 = Math.floor(Math.random()*255);
        r2 = Math.floor(Math.random()*255);
        r3 = Math.floor(Math.random()*255);
        childdiv.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})})});


butt.addEventListener("click", function () {
    choice = +(prompt("Enter the size of one side of the grid: "));
    if(choice>100)
    {
        alert("The maximum size of the grid is 100!");
        choice = +(prompt("Enter the size of one side of the grid: "));
    }
    
    for (let i = 0; i < size; i++) {
        const newdiv = document.querySelector(".container");
        for (let l = 0; l < size; l++) {
            const childdiv = document.querySelector(".inside");
            childdiv.remove();
        }
        newdiv.remove();
    }
    
    
    size = 640 / choice;
    for (let i = 0; i < choice; i++) {
        const newdiv = document.createElement("div");
        for (let l = 0; l < choice; l++) {
            const childdiv = document.createElement("div");
            newdiv.appendChild(childdiv);
            childdiv.addEventListener("mouseover", function () {
                childdiv.style.backgroundColor = "#C9D5B5";
            });
            childdiv.classList.add("inside");
            childdiv.style.height = `${size}px`;
            childdiv.style.width = `${size}px`;
            childdiv.style.maxWidth = `${size}px`;
        }
        newdiv.classList.add("container");
        newdiv.style.height = `${size}px`;
        div.appendChild(newdiv);
    }
    size = choice;
    // const ins = document.querySelectorAll(".inside");
    // ins.forEach(function (i) {
    //     i.style.height = `${choice}px`;
    //     i.style.width = `${choice}px`;
    // })
    // //const con = document.querySelectorAll(".container");
    // con.forEach(function (i) {
    //     i.style.height = `${choice}px`;
    // })
});