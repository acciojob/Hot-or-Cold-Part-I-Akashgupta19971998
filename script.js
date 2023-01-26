//your code here
let inp=document.querySelector('input')
let button1=document.getElementById('btn')
let para=document.getElementById('num')
 
let number=0;
function randomNumber(min, max) {
    number=Math.floor(Math.random() * (max - min) + min); 
    // console.log(number);
    inp.value=number;
    hotorcold();
}
randomNumber(-20,20)

button1.addEventListener('click',function(){ randomNumber(-20,20)})

function hotorcold(){
    // console.log("function called",number)
if(number<10){
    para.innerText="cold";
}
else{
    para.innerText="hot";
}
}
