const sun1 = document.getElementById('sun1');
let isSecondImage = false;
const switcher = document.querySelector('.switcher');
const leftbtn = document.querySelector('.arrow-1');
const rightbtn = document.querySelector('.arrow-2');
let currentPosition = 0;



switcher.addEventListener('click', () => {
  if (!isSecondImage) {
    sun1.style.backgroundImage = "url('img/sun2.svg')"; 
    isSecondImage = true;
  } else {
    sun1.style.backgroundImage = "url('img/sun1.svg')"; 
  }
});

leftbtn.addEventListener('click', () =>{
  currentPosition -= 50; 
  sun1.style.left = currentPosition + 'px';
  console.log('left');
  calculations();
});
rightbtn.addEventListener('click', () =>{
  currentPosition += 50;
  sun1.style.left = currentPosition + 'px';
  console.log('right');
  calculations();
});

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const boxCoordinate = [157, 607, 1057];

function getSunCoordinate(){
  const sunRect = sun1.getBoundingClientRect();
  return parseInt(sunRect.left);
}

function calculations(){
  const sunMatch = getSunCoordinate();

  box1.style.backgroundColor = '#3498db';
  box2.style.backgroundColor = '#3498db';
  box3.style.backgroundColor = '#3498db';

  if (sunMatch === boxCoordinate[1]){
    box2.style.backgroundColor = 'red'
    } else if(sunMatch === boxCoordinate[0]){
      box1.style.backgroundColor = 'red'
        }else if(sunMatch === boxCoordinate[2]){
         box3.style.backgroundColor = 'red'
}};

calculations();