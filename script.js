// CALLING OBJECT USING QUERY SELECTOR FOR CREATING SOME LOGIC TO GIVE LIFE INSIDE STOPWATCH 
const clock = document.querySelector('.stopwatch');

let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');


// STORING MINUTES, SECOND AND HOURS IN VARIABLES FOR UPDATING ITS VALUE 
let sec = 0;
let min = 0;
let hr = 0;
let intervalId;


// CREATING EVENT LISTENER FOR START BUTTON AND CHANGING TIME STATE USING SETINTERVAL 
start.addEventListener('click', ()=>{
    // STORE THE SET INTERVAL CALLBACK FUNCTION FOR RE-USE 
    intervalId = setInterval(()=>{
        if (sec < 59){
            sec ++
        }
        
        else if (min > 59) {
            hr ++;
            min = 0
        }

        else {
            sec = 0;
            min ++;
        }
        
        // DOING SOME STRING FORMATING TO MAKE SINGLE DIGIT TIME DOUBLE DIGIT 
        clock.innerText = `${String(hr).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
    }, 1000)

})


// FOR STOPING THE STOPWATCH 
stop.addEventListener('click', ()=>{
    clearInterval(intervalId)
})


// FOR RESETING THE STOPWATCH I JUST REFRESS THE PAGE USING WINDOW OBJECT 
reset.addEventListener('click', ()=>{
    window.location.reload();
}) 