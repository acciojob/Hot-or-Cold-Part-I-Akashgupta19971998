//your code here
let input=document.querySelector('input')
let button=document.querySelector('btn')
let para=document.querySelector('num')

button.addEventListener('onclick', hotorcold)

function hotorcold(){
let input=randomNumber.value
if(randomNumber<10){
    para.innerHTML="cold";
}
else{
    para.innerHTML="hot";
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
randomNumber(-20,20)

}