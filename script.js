AOS.init()

// Scene 1 plays when the first Alexa is clicked
let sound1 = new Audio ("sound/scene1.wav");
let btn1 = document.getElementById ("button1");
btn1.addEventListener("click", ()=>{sound1.play();})

// Scene 2 plays when the second Alexa is clicked
let sound2 = new Audio ("sound/scene2.wav");
let btn2 = document.getElementById ("button2");
btn2.addEventListener("click", ()=>{sound2.play();})

// Scene 3 plays when the third Alexa is clicked
let sound3 = new Audio ("sound/scene3.wav");
let btn3 = document.getElementById ("button3");
btn3.addEventListener("click", ()=>{sound3.play();})

// Scene 4 plays when the fourth Alexa is clicked
let sound4 = new Audio ("sound/scene4.wav");
let btn4 = document.getElementById ("button4");
btn4.addEventListener("click", ()=>{sound4.play();})


