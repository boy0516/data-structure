
// const player = {
//     name:"Minju",
//     sayHello:function(nameofPerson){
//         console.log("hello "+ nameofPerson+ " Nice to meet u");
//     },
   
// };
// console.log(player.name);
// player.sayHello("Lynn");


// a-b/ a/b a**b a+b 이런 결과들을 받아주세용


const calculator = {
    add: function(a,b){
        return(a+b);
    },
    times: function(a,b){
        return(a*b);
    },
    minus: function(a,b){
        return(a-b);
    },
    divide: function(a,b){
        return(a/b);
    },
    power: function(a,b){
        return(a**b);
    }
}


calculator.add(1,2);
calculator.times(2,3);
calculator.minus(1,2);
calculator.divide(1,2);
calculator.power(1,2);

const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
    return "hello";
}

const krAge = calculateKrAge(age);
console.log(krAge);