class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email} , lucoins are ${this.luCoins} , Courses = ${this.courses}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
    addCoins(user){
        user.luCoins++;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }
    removeCoins(user){
        if(user.luCoins>0){
        user.luCoins--;
        console.log(`${user.name}  lucoins as decremented and he has ${user.luCoins} coins left`);}
        else{
            console.log(`${user.name} has 0 lucoins.`);
        }
        return this;
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   removeCourse(user,course){
    let index=user.courses.indexOf(course);
    user.courses.splice(index,1);
    console.log(`${user.name}, ${course} course is removed.`);
    console.log(user);
}
}

let usersona = new User('sona',20,'sona@gmail.com')
let userAbi = new User('Abi',20,'abi@gmai.com')
let modnaga = new Moderator('Shivam',19,'naga@gmail.com','Moderator');
let adminjeya = new Admin('jeya',28,'jeya@gmail.com');
let users = [usersona,userAbi,modnaga,adminjeya];

usersona.login();
User.greet();

modnaga.addCoins(usersona);
modnaga.addCoins(usersona);
adminjeya.addCourse(usersona,"javascript")
adminjeya.addCourse(usersona,"DBMS")
adminjeya.addCourse(usersona,"c Programming")
modnaga.removeCoins(usersona);
adminjeya.removeCourse(usersona,"JavaScript");

usersona.getDetails();
usersona.logout();

userAbi.login();
User.greet();

modnaga.addCoins(userAbi);
modnaga.addCoins(userAbi);
modnaga.addCoins(userAbi);
adminjeya.addCourse(userAbi,"C")
adminjeya.addCourse(userAbi,"C++")
adminjeya.addCourse(userAbi,"R-Programming")
adminjeya.addCourse(userAbi,"Python")
modnaga.removeCoins(userAbi);
adminjeya.removeCourse(userAbi,"Python");

userAbi.getDetails();
userAbi.logout();
modnaga.deleteUser(userAbi);