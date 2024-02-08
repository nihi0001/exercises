const list = document.querySelector("ul");

const li = document.createElement("li");
const valueArr = []
li.style.setProperty("--height", "10");
list.appendChild(li);

setInterval(genererSoejle, 1000);


function genererSoejle() {
    valueArr.push(Math.round(Math.random () * 100));
    console.log("valueArr")

    const li = document.createElement("li");
    li.style.setProperty("--height", Math.round(Math.random () * 100));
    list.appendChild(li);

    console.log("genererSoejle")
}

////

const list = document.querySelector("ul");
const arrCue = []
setInterval(generateBrs, 1000);

function generateBrs() {
    console.log(arrCue);
    const randoNum = getRandoNum();
    arrCue.push.(randoNum);
    const li = document.createElement("li");
    li.style.setProperty("--height", randoNum);
    list.appendChild(li);

    if(arrCue.length>5){
        arrCue.shift();
        list.removeChild(list.firstChild);
    }
}

function getRandoNum(){
    return Math.round(Math.random()*100);
    
}


    //arrCue.push(Math.round(Math.random () * 100));

    //li.style.setProperty("--height", Math.round(Math.random () * 100));
   // list.appendChild(li);

    //console.log("genererSoejle")
}




