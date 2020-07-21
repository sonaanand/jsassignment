let input=[];
async function fetch(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    consth = await response.json();
    input =h;
}

fetch();

function getinput(){
    setTimeout(()=>{
        let result = [];
        input.forEach(user=>{
            if(user.completed){
                result.push(user);
            }
        });
        console.log(result);

        
        
    },1000);
}

function createUser(user){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            input.push(user);
            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject("Oops an error occured");
            }

        }, 3000);
    })
}
createUser(input).then(getinput).catch(error=>console.log(error));