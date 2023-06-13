const div = document.querySelector(".grid");

for(let i=0;i<16;i++)
{
    const newdiv = document.createElement("div");
    console.log("HERE");
    for(let l=0;l<16;l++)
    {
        const childdiv = document.createElement("div");
        newdiv.appendChild(childdiv);
        childdiv.addEventListener("mouseover",function (){
            childdiv.style.backgroundColor = "#C9D5B5";
        });
        childdiv.classList.add("inside");
    }
    newdiv.classList.add("container");
    div.appendChild(newdiv);
}

