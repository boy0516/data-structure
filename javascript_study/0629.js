const age = prompt("How old are you?");

if(isNaN(age) || age<0){
    console.log("Please write a number");
} else if(age <18){
    console.log("You are too young");
} else if(age>=18 && age<=50){
    console.log("you can drink");
} else if(age>50 &&age<=80){
    console.log("You should exercise");
} else if (age> 80){
    console.log("You can do whatever you want");
} 