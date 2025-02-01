let numC = document.getElementById('numC');
let numL = document.getElementById('numL');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    alert(parseInt(numC.value) / parseInt(numL.value))
});

let numR = document.getElementById('numR');
let numE = document.getElementById('numE');
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function(){
    alert(parseInt(numR.value) - parseInt(numE.value))
});

let numT = document.getElementById('numT');
let numT1 = document.getElementById('numT1');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function(){
    alert(parseInt(numT.value) + parseInt(numT1.value))
});

let numP = document.getElementById('numP');
let numS = document.getElementById('numS');
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function(){
    alert(parseInt(numP.value) * parseInt(numS.value))
});

let numA = document.getElementById('numA');
let numA1 = document.getElementById('numA1');
let numA2 = document.getElementById('numA2');

let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function(){
    alert((parseInt(numA.value)+parseInt(numA1.value)+parseInt(numA2.value)) / 3 )
});


let numDx = document.getElementById('numDx');
let numDxs = document.getElementById('numDxs');
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function(){
    alert(  (   (parseInt(numDx.value) * parseInt(numDxs.value)   )   /100)
    -(parseInt(numDx.value) * parseInt(numDxs.value)  )  )
});

let numEx = document.getElementById('numEx');
let numExs = document.getElementById('numExs');
let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', function(){
    alert(parseInt(numEx.value) ** parseInt(numExs.value))
});

let numRx = document.getElementById('numRx');
let numRxs = document.getElementById('numRxs');
let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', function(){
    alert(parseInt(numRx.value) % parseInt(numRxs.value))
});
