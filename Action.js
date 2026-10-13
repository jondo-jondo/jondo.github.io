const Problem = document.getElementById("Problem");
const Answer = document.getElementById("Answer");
const A = document.getElementById("A");
const S = document.getElementById("S");
const M = document.getElementById("M");
const D = document.getElementById("D");
let int1 = Math.floor(Math.random() * 100); //0-99 inclusive
let int2 = Math.floor(Math.random() * 100);
let Op = " X ";
let Type = "";



if (Index)
{
A.onclick = function()
{
A.style.backgroundColor = "#00f2ff";
Op = " + ";
}

S.onclick = function()
{ 
S.style.backgroundColor = "#00f2ff";
Op = " - ";
}

M.onclick = function()
{
 
M.style.backgroundColor = "#00f2ff";
Op = " X ";
}

D.onclick = function()
{
D.style.backgroundColor = "#00f2ff";
Op = " ÷ ";
}
}
else
    Problem.innerHTML = int1 + Op + int2;

document.addEventListener("keydown", function (logAnyKey) { 
switch (event.code)
{
case "Enter":
if (Problem.innerHTML == "Correct")
    Problem.innerHTML = int1 + Op + int2;
else if(Type == int1 * int2)
{
Problem.innerHTML = "Correct";
Type = "";
int1 = Math.floor(Math.random() * 100);
int2 = Math.floor(Math.random() * 100);
}
else if (Problem.innerHTML.includes("Incorrect") == false)
    Problem.innerHTML += " Incorrect";
break;
case "Numpad1":
case "Digit1":
Type += "1";
break;
case "Numpad2":
case "Digit2":
Type += "2";
break;
case "Numpad3":
case "Digit3":
Type += "3";
break;
case "Numpad4":
case "Digit4":
Type += "4";
break;
case "Numpad5":
case "Digit5":
Type += "5";
break;
case "Numpad6":
case "Digit6":
Type += "6";
break;
case "Numpad7":
case "Digit7":
Type += "7";
break;
case "Numpad8":
case "Digit8":
Type += "8";
break;
case "Numpad9":
case "Digit9":
Type += "9";
break;
case "Numpad0":
case "Digit0":
Type += "0";
break;
case "Backspace":
Type = Type.substring(0, Type.length - 1);
break;
}
Answer.innerHTML = Type;
});
