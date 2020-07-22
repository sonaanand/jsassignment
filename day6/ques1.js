 var arr_color=["blue","wheat","pink","black","skyblue","green"];
function changecolor(){
    setTimeout(function loop(){
        document.bgColor=arr_color.shift();
        if(arr_color.length){
            setTimeout(loop,5000);

        }
    },5000);
}
changecolor();