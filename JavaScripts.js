let json = [

]


function init(){

    createLunch;
    CreateSection;
    for(i = 0; i < 5; i++){
    days();
    }
}
window.onload = init;


function days(){

/*skapa så att alla maträtter visas.
    den ska skapa rätt antal maträtter i matsedel
    */
}


function createLunch(){
    let matsedel = document.getElementById("matsedel");
    let div = document.createElement("div");
    let P = document.createElement("p");
    let Span = document.createElement("span");
    
    matsedel.appendChild(section);
    section.appendChild(div);
    div.appendChild(P);
    P.appendChild(span);
    Span.innerText = "lunch" + i++;
    //skapa P tag.
    //Skapa span i P tag
}

function CreateSection(){
    let section = document.createElement("section");
    let h3 = document.createElement("h3");
    
    section.appendChild(h3);
    h3.innerText = day;
    //skapa section
}


/*
    Hur man skapar saker i JS för att sen displaya det i HTML kod
    document.createElement(tagName);
        t.ex div,section,p,span
*/