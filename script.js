

let ClkButton = document.querySelector("#start");
let timer =document.querySelector("#count");
let H1Start=document.querySelector(".centre");
let Quest=document.querySelector(".Quest")
let Option1=document.querySelector(".op1");
let Option2=document.querySelector(".op2");
let Option3=document.querySelector(".op3");
let Option4=document.querySelector(".op4");

let secondsLeft=70;
let q=0;


timer.textContent="Time: "+secondsLeft;
// Defining Timer function
function StartTimer(){
    let timeinterval=setInterval(function(){
        Onstart();
        DisplayQuestain();
        secondsLeft--;
        timer.textContent="Time: "+secondsLeft;
        
        if (secondsLeft === 0){
           clearInterval(timeinterval);
           

        }

    },1000);
}

// Before starting Questain 
function Onstart(){
    H1Start.textContent="";
}
    

//start Questain

function DisplayQuestain(){
let QuizQuestion=document.createElement("h2");
let opt1=document.createElement("h2");
let opt2=document.createElement("h2");
let opt3=document.createElement("h2");
let opt4=document.createElement("h2");
if (q<questionBank.length){

   
   QuizQuestion.textContent=questionBank[q].question;
    Quest.appendChild(QuizQuestion);
    opt1.textContent=questionBank[q].choices[0];
    opt2.textContent=questionBank[q].choices[1];
    opt3.textContent=questionBank[q].choices[2];
    opt4.textContent=questionBank[q].choices[3];
    Option1.appendChild(opt1);
    Option2.appendChild(opt2);
    Option3.appendChild(opt3);
    Option4.appendChild(opt4);

}
}




ClkButton.addEventListener("click", StartTimer )