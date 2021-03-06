const score = document.querySelector('#scores');
const addPoint = document.querySelector('#addPoint');
const chosenScore = document.querySelector('#pointOpt');
let maxScore = chosenScore.value;

chosenScore.addEventListener('change', (event) => {
  maxScore = event.target.value;
});

let p1 = 0;
let p2 = 0;
score.innerText = `${p1} to ${p2}`;

addPoint.addEventListener('click', (e) => {
    if (e.target.id === 'point1' && p1 < maxScore) 
    {p1+=1; }
    else if (e.target.id === 'point2' && p2 < maxScore) 
    {p2+=1;}
    else if (e.target.id === 'reset')
    { p1 = 0; p2 = 0;}
    score.innerText = `${p1} to ${p2}`;});