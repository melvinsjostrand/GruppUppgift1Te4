let json = [

]
let day = [
    "måndag" , "tisdag" , "onsdag"  ,"torsdag" , "fredag"
]
let index = 1;

function init(){
    week();
    for(i = 0; i < 5; i++){
        createLunch();
    }
}
window.onload = init;


/*function days(){
    for(Element in JSON){
        createLunch();
    }
}*/

function week(){
    let h2 = document.getElementsByTagName("h2");
    console.log(h2); 
    h2[0].innerText = "Vecka.38";
    //funkar att visa vecka.
}

function createLunch(){
    let P;
    let span;
    let text = [
        "Moussaka Grekisk potatis- och grönsaksgratäng på ärtfärs serveras med salladsbuffé" ,  
        "Potatis- och zucchiniplättar serveras med rårörda lingon och salladsbuffé",
        "Spaghetti Bolognese Pastasås på nötfärs serveras med salladsbuffé"
        ]
   
    let matsedel = document.getElementById("matsedel");
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    let div = document.createElement("div");
        for(l = 1; l < 4; l++){
           
            span = document.createElement("span");
            P = document.createElement("p");
            div.appendChild(P);  
           
            P.appendChild(span);
            span.innerText = "Lunch " + l;
             P.innerText += text[1];
            console.log(span);
         
    
        }
            section.appendChild(h3);
            matsedel.appendChild(section);
            section.appendChild(div);
            h3.innerText = day[i];
    }


async function getjson(){
    let path = ""
}