let json = [

]

let i = 1;

function init(){
    week();
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
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    
    section.appendChild(h3);
    h3.innerText = Day;
   
}

function createLunch(){
   
    let matsedel = document.getElementById("matsedel");
    
    for(i = 0; i < 3; i++){
        let div = document.createElement("div");
        let P = document.createElement("p");
        let Span = document.createElement("span");
    }

    matsedel.appendChild(section);
    section.appendChild(div);
    div.appendChild(P);
    P.appendChild(span);
    Span.innerText = "lunch" + i++;
}


async function getjson(){
    let path = ""
}