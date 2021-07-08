document.querySelector('#button1').addEventListener('click',Please);
document.querySelector('#button2').addEventListener('click',Sub);
document.querySelector('#button3').addEventListener('click',Mult);
document.querySelector('#button4').addEventListener('click',Div);

let sum = 0;

function Please(){
    const choice = parseInt(document.querySelector("#num1").value);
    const choice2 = parseInt(document.querySelector("#num2").value);
    const choice3 = parseInt(document.querySelector("#num3").value);

    let result = choice + choice2 + choice3;

    document.querySelector("#answer").innerText = result;
    console.log(parseInt(result));
}

function Sub(){
    const choice = parseInt(document.querySelector("#num1").value);
    const choice2 = parseInt(document.querySelector("#num2").value);
    const choice3 = parseInt(document.querySelector("#num3").value);

    let result2 = choice - choice2 - choice3;

    document.querySelector("#answer").innerText = result2;
    console.log(parseInt(result2));
}

function Mult(){
    const choice = parseInt(document.querySelector("#num1").value);
    const choice2 = parseInt(document.querySelector("#num2").value);
    const choice3 = parseInt(document.querySelector("#num3").value);

    let result3 = choice * choice2 * choice3;

    document.querySelector("#answer").innerText = result3;
    console.log(parseInt(result3));
}

function Div(){
    const choice = parseInt(document.querySelector("#num1").value);
    const choice2 = parseInt(document.querySelector("#num2").value);
    const choice3 = parseInt(document.querySelector("#num3").value);

    let result4 = choice / choice2 / choice3;

    document.querySelector("#answer").innerText = result4;
    console.log(parseInt(result4));
}