console.clear();  /*https://codepen.io/doemser/pen/abLaavz*/

const root = document.querySelector(".root");

const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = (s, l) => `hsl(${randomNumberBetween(180,360)}, ${s}%, ${l}%)`;

const eyeNumber = 200;

for(i=0; i<eyeNumber; i++){
  const eye = document.createElement("div");
  eye.classList.add("eye");
  eye.style.top = `${randomNumberBetween(-20,120)}%`;  
  eye.style.left = `${randomNumberBetween(-20,120)}%`;
  eye.style.color = randomColor(50,50);
  root.append(eye);
}

const eyes = document.querySelectorAll(".eye");

root.addEventListener("mousemove", (event_) => {   /* mousmove : when moving the mouse in any direction will follow the direction of the mouse.*/
   eyes.forEach(eye => {
        let x = (eye.offsetLeft) + (eye.style.width / 2);
        let y = (eye.offsetTop) + (eye.style.height / 2);
        let radius = Math.atan2(event_.pageX - x, event_.pageY - y);
        let rotation = (radius * (180 / Math.PI) * -1) + 180;
        eye.style.transform = `rotate(${rotation}deg)`;
     }); 
 });

root.addEventListener("click", event_ => {   /*click : Execution of a function on click will merge.*/
  eyes.forEach(eye => {
    eye.style.top = `${randomNumberBetween(-20,120)}%`;
    eye.style.left = `${randomNumberBetween(-20,120)}%`;
  });
});

