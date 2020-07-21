userinput=Number(prompt("enter your number!"));
let arr=[];
for (i=0;i<userinput;i++){
    arr.push(i);
}
let odd=arr.filter(num=>num%2!=0);
let oddcubes=odd.map(num=>num*num);
console.log("odd numnber is=",odd);
console.log("cube's of odd numnber is=",oddcubes);