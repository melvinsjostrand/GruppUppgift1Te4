let json = 
    {
        "date": {
            "dayNum":10,
            "month":"sep",
            "dayName": "Monday",
        "food":[
            {
            "lunch" :  "nioamdw",
            },
            
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
        CreateText();
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
    let food1 = document.getElementById("matsedel");
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
        food1.appendChild(section); 
        section.appendChild(h3);
        h3.innerText = day[i];
    createLunch(food1, section);
}

function createLunch(f , s){
    let P;
    let span;
    
    let div = document.createElement("div");
        s.appendChild(div);
        json.date.food.forEach(element=>{
            CreateText(element);
            console.log(CreateText());
        })
        for(index = 0; index < json.date.food.length; index++){
            span = document.createElement("span");
            P = document.createElement("p");
            div.appendChild(P);  
            P.appendChild(span);
            span.innerHTML = "Lunch " + (index+1);
        }
    CreateText(P);
    }

function CreateText(P,element){
    P = document.createElement("p");
    P.innerText += json.date.food;
    console.log(json.date);
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