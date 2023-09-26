let json = {
        "date": {
            "dayNum":10,
            "month":"sep",
            "dayName": "Monday",
        "food":[
      {
        "lunch1" :  "nioamdw",
         "lunch2" : "imdawoimawd",
         "lunch3" : "nidawniwdan"
      
    }
    ]
}
}

let index;
let weekNumber = 38;
let day = [
    "Måndag" , "Tisdag" , "Onsdag"  ,"Torsdag" , "Fredag"
]

function init(){
    week();
    for(i = 0; i < 5; i++){
        CreateSection();
    }
}

//körs för att skapa matsedel
window.onload = init;

function week(){
    let h2 = document.getElementsByTagName("h2");
    console.log(h2); 
    h2[0].innerText = "Vecka."+ weekNumber;
    //funkar att visa vecka.
}

function CreateSection(){
    let food = document.getElementById("matsedel");
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
        food.appendChild(section); 
        section.appendChild(h3);
        h3.innerText = day[i];
    createLunch(food, section);
}

function createLunch(f , s){
    let P;
    let span;
    
    let div = document.createElement("div");
        s.appendChild(div);
        for(index = 0; index < json.date.food.length; index++){
           
            span = document.createElement("span");
            P = document.createElement("p");
            div.appendChild(P);  
            P.appendChild(span);
            span.innerHTML = "Lunch " + (index+1) ;




            console.log(json.date.food[0][0]);
            let lunch = "lunch" + (index+1);
            P.innerHTML += json.date.food[0].lunch1;
            P.innerHTML += json.date.food[0].lunch2;
            console.log(json)
        }
    //CreateText();
    }
/*div
    section
        h3 /h3
        div
            P
            span /span lunch
            /p
            P
            span /span lucnh
            /p
            P
            span /span lunch
            /p
        /div
        section
        h3 /h3
        div
            P
            span /span lunch2
            /p
            P
            span /span lucnh2
            /p
            P
            span /span lunch2
            /p
        /div
*/

function CreateText(){
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