//display welcome message
let username = prompt("please enter your name!!");
document.getElementById("name").innerHTML = (`<h1> Welcome ${username}</h1>`);

//display date and time
var date = new Date();
let n = date.toLocaleTimeString("en-US");
document.write(n);

//toggle method of class list
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}