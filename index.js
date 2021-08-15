const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", () => {
    let btnText = drum[i].textContent;
    playMusic(btnText)
    animation(btnText)
  });
}


document.addEventListener('keypress', (e)=> {
   let keytext = e.key
   playMusic(keytext)
   animation(keytext)
})

function playMusic(key) {
    switch (key) {
        case "w":
          let crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "a":
          let kichBass = new Audio("sounds/kick-bass.mp3");
          kichBass.play();
          break;
        case "s":
          let snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "d":
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "j":
          let tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "k":
          let tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "l":
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
    
        default:
            console.log(btnText);
          break;
}}


function animation(key) {
  const pressed = document.querySelector(`.${key}`)
  pressed.classList.add('pressed')

  setTimeout(()=> {
    pressed.classList.remove('pressed')
  }, 100)
} 