const score = document.querySelector('#scores');
const addPoint = document.querySelector("#addPoint");

let p1 = 0;
let p2 = 0;
score.innerText = `${p1} to ${p2}`;

addPoint.addEventListener("click", (e) => {
    if (e.target.id === 'point1' ) 
    {p1+=1; }
    else if (e.target.id === 'point2') 
    {p2+=1;}
    else 
    { p1 = 0; p2 = 0;}
    score.innerText = `${p1} to ${p2}`});

