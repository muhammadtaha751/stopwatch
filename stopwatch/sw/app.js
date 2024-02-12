var hour = 0;
var minutes = 0;
var second = 0;
var milisecond = 0;

var gethr= document.getElementById('hr')
var getmin= document.getElementById('min')
var getsec= document.getElementById('sec')
var getmsec= document.getElementById('count')

var interwal;


function start(){

   interwal = setInterval(function(){
        milisecond++
        getmsec.innerHTML= milisecond
       
        if(milisecond>=100){
            second++
            getsec.innerHTML = second
            milisecond =0
        }
        else if(second>=60){
            minutes++
            getmin.innerHTML = minutes
            second = 0
        }
        else if(minutes>=60){
            hour++
            gethr.innerHTML = hour
            minutes=0
        }
    },10)


}

function stop(){
    clearInterval(interwal)
}

function reset(){

    var hour = 0;
var minutes = 0;
var second = 0;
var milisecond = 0;
gethr.innerHTML=hour;
getmin.innerHTML=minutes;
getsec.innerHTML=second;
getmsec.innerHTML=milisecond;

}