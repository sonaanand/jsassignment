// add item
function addItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var value = document.createTextNode(inputValue);
    li.appendChild(value);
     //alert
    if (inputValue === '') {
    alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }

    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    span.className = "close";
    li.appendChild(span);
    for (i = 0; i < close.length; i++) 
    addToLocalStorage(inputValue);

}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  //div.style.display = "none";
  }
}

//Clearing the list
function clear(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
//store the data in local storage
function addToLocalStorage(){
   var lit=document.getElementById("list").innerText;
  var arr=lit.split('\n');
  localStorage.setItem('todo_list',JSON.stringify(arr)); 
}
//remove
function remove(){
  var lit=document.getElementById("list");
  if(document.getElementById("list").innerText==" "){
    alert("no date should be removed!!")
  }else{
    lit.removeChild(lit.childNodes[0]);
  }

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(remove) {
  if (remove.target.tagName === 'LI') {
    remove.target.classList.toggle('checked');
  }
},false);
}