let json = [
    "Moussaka Grekisk potatis- och grönsaksgratäng på ärtfärs serveras med salladsbuffé" ,
]
let weekNumber = 38;
let day = [
    "Måndag" , "Tisdag" , "Onsdag"  ,"Torsdag" , "Fredag"
]

function init(){
    week();
    for(i = 0; i < 5; i++){
        createLunch();
    }
}
    //körs för att skapa matsedel
window.onload = init;

function week(){
    let h2 = document.getElementsByTagName("h2");
    console.log(h2); 
    h2[0].innerText = "Vecka."+weekNumber;
    //funkar att visa vecka.
}

function createLunch(){
    let P;
    let span;
    let matsedel = document.getElementById("matsedel");
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    let div = document.createElement("div");
        matsedel.appendChild(section);
        section.appendChild(h3);
            h3.innerText = day[i];
        section.appendChild(div);

        for(index = 1; index < 4; index++){
           
            span = document.createElement("span");
            P = document.createElement("p");
            div.appendChild(P);  
            
            P.appendChild(span);
            console.log(span);
            span.innerHTML = "Lunch " + index;
            P.innerHTML += json[0];
            console.log(json)
        }
    }


/*async function getjson(){
    let path = ""
}*/


/*lA = document.getElementById("vänsterpil");
rA = document.getElementById("högerpil");


lA.addEventListener("click",event => {
    if(weekNumber-1<1){
    location.href = "index.html?week=52"; 
    } else{
        weekNumber--;
        location.href = "index.html?week=" + weekNumber; 
    }        
    })



rA.addEventListener("click" , event => {
    if(weekNumber+1>52){
    location.href = "index.html?week=1"; 
    } else{
    location.href = "index.html?week=" + (weekNumber+1); 
    }
})*/