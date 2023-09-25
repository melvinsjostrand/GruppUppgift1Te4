let json = [

]
let day = [
    "måndag" , "tisdag" , "onsdag"  ,"torsdag" , "fredag"
]
let index = 1;

function init(){
    week();
    CreateSection();
    createLunch();
    for(i = 0; i < 5; i++){
    days();
    }
}
window.onload = init;


function days(){
    for(Element in JSON){
        createLunch();
    }
}

function week(){
    let h2 = document.getElementsByTagName("h2");
    console.log(h2); 
    h2[0].innerText = "Vecka.38";
    //funkar att visa vecka.
}

function CreateSection(){

   
}


function createLunch(CreateSection){
   for(i = 0; i < 5; i++){
    let matsedel = document.getElementById("matsedel");
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    let div = document.createElement("div");
    let P = document.createElement("p");
    let span = document.createElement("span");

    section.appendChild(h3);
    matsedel.appendChild(section);
    section.appendChild(div);
    div.appendChild(P);
    P.appendChild(span);
    h3.innerText = day[i];
    span.innerText = "lunch" + index++;
    P.innerText += "Moussaka Grekisk potatis- och grönsaksgratäng på ärtfärs serveras med salladsbuffé";
    }
}

async function getjson(){
    let path = ""
}