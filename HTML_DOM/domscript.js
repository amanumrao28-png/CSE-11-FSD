function addParagraph(){
    const para=document.createElement("p");
    para.innerHTML="<u>This is a new Paragraph</u>";
    para.style.color="blue";
    document.getElementById("root").appendChild(para);
}
function removeParagraph(){
    const root=document.getElementById("root");
    const para=document.querySelector("p");
    root.removeChild(para);
}
function removeAllParagraphs(){
    const parent=document.getElementById("root");
    const para=parent.querySelectorAll("p");
    for(i of para){
        parent.removeChild(i);
    }
}
