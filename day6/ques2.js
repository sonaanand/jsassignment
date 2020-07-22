let tables=document.getElementById("tables");
let num=prompt("please enter your number",0);
    for(let i=1; i<=20;i++){
       tables.innerText=`Tables of ${num}7`;
document.write(`${num} X ${i} = ${num*i} </br>`);
    }

