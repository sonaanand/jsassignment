let sales=Number(prompt("enter the sales:-"));
//sales=20000;
let commission,commissionpercent=null;

 if(sales>0 && sales<=5000){
      commissionpercent=2;
      commission=sales*(commissionpercent/100);
     }
else if(sales>=5001 && sales<=10000){
    commissionpercent=5;
    commission=sales*(commissionpercent/100);
    }
else if(sales>=10001 && sales<=20000){
    commissionpercent=7;
    commissionpercent=sales*(commissionpercent/100);
    }
else if(sales>=20000){
        commissionpercent=10;
        commission=sales*(commissionpercent/100);
       }
else{
   alert("invaid input!!!");
       
    }
    commission=commission.toFixed(3);
    console.log(` your total sales:-${sales},your ${commissionpercent}% commission is ${commission}.`)
    alert (`your total sales:-${sales},your ${commissionpercent}% commission is ${commission}.`)