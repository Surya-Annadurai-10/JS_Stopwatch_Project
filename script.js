let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let num3 = document.querySelector(".num3")
let box = document.querySelector(".box")
let num4 = document.querySelector(".num4")
let colon3 = document.querySelector(".colon3")
let laps = document.querySelector(".laps");
let lapBtn = document.querySelector(".lap");


document.addEventListener("click" , (event) =>{
    if (event.target.classList.contains("start")){
        start();
    }else if (event.target.classList.contains("stop")){
       stop();
    }else if (event.target.classList.contains("reset")){
        reset();        
    }else if (event.target.classList.contains("lap")){
        CallLap();
    }
});

let milli =  0;
let sec =  0;
let min = 0;
let hour = 0;
let totalMilli = 0;

function reset(){
     milli =  0 ;
     sec =  0 ;
     min = 0 ;
     hour = 0 ;
     num3.innerText = "00";
        num2.innerText = "00";
        num1.innerText = "00";
        num4.innerText = "00";
        let arr = document.querySelectorAll(".div-box")
        arr.forEach((value) =>{
            value.remove();
        })

        lapNum = 0;
}

let setIn ;
function start(){
     colon3.innerText = ":";
    box.appendChild(colon3)
    box.appendChild(num4);

   setIn = setInterval(() =>{

    totalMilli++;
    milli++;
    if (milli == 100){
        milli = 0;
        sec++;
       
    }
    if (milli < 10){
        num4.innerText = "0"  + milli;
    }else{
        num4.innerText = milli;
    }

   

        if (sec == 60){
            min++;
            sec = 0;

        }

        if (min == 60){
            hour++;
            min = 0;
        }

        if (sec < 10){
            num3.innerText = "0"  + sec;
        }else{
            num3.innerText = sec;
        }

        if (min < 10){
            num2.innerText = "0"  + min;
        }else{
            num2.innerText = min;
        }

        if (hour < 10){
            num1.innerText = "0"  + hour;
        }else{
            num1.innerText = hour;
        }

    }, 10);

    
}

function stop(){
    clearInterval(setIn);
    console.log("Stop");
}

let lastMilli = 0;
let div;
let lapNum = 0;

function CallLap(){
lapNum++;
console.log(totalMilli);
let newMilli  = totalMilli - lastMilli;

let lapMilli = newMilli % 100;
let lapSec = Math.floor((newMilli / 100)% 60 );
let lapMin =Math.floor (((newMilli / 100)/ 60 )% 60) ;
let lapHour =Math.floor (((newMilli / 100)/ 60 )/60) ;

if (lapMilli < 10){
    lapMilli = "0" + lapMilli;
}

if (lapSec < 10){
    lapSec = "0" + lapSec;
}

if (lapMin < 10){
    lapMin = "0" + lapMin;
}

if (lapHour < 10){
    lapHour = "0" + lapHour;
}
   
    div = document.createElement("div");
    div.classList.add("div-box")
    div.innerHTML =`
            <div class = "lap-num">Lap : ${lapNum} </div>
            </br>
           <div>
            <span class="num1">${lapHour}</span>
            <span class="colon1">:</span>
            <span class="num2">${lapMin}</span>
            <span class="colon2">:</span>
            <span class="num3">${lapSec}</span>
            <span class="colon3">:</span>
            <span class="num4">${lapMilli}</span>
           </div>
    `
    laps.appendChild(div);
    lastMilli = totalMilli;
}

