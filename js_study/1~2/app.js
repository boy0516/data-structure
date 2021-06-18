// const a =5;
// const b =2;
// let c =3;
// const myName = "nico";

// console.log('lslsl');
// console.log(a+b);
// console.log(a/b);
// console.log(a*b);
// console.log(c);
// console.log("hello"+ myName);

//자바스크립트에서는 낙타체를 사용한다. 파이썬에서는 _를 깔아주고

// const말고 let을 사용하는 방법이 있다. 
//이게 우리 프로그램에 어떤 차이를 주는가. 아무른 차이를 주는것같지 않다. 
// const는 상수라는것으로 업데이트 되지 않는다. 
// 선언이후 수정해주려고해도 수정되지 않는다. 

// let myName2 = "nico"
// console.log(myName2)
// myName2 = "nicous"
// console.log(myName2)
//let을 쓰면 변한다.

//그런데 const를 쓰는 이유는 가끔 몇몇 variable은 절대로 변하지 않도록 해야 할 때가 있다. 

//var은 예전방식으로 지금은 잘 쓰지 않으려고 하는듯 하다. const와 let을 사용하도록 하자.

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//다음은 boolen 타입에 대해 배우겠다. 

// const amFat =true;
// console.log(amIFat);

// null 이랑 false는 다르다. null은 여기 없다는 것을 이야기 하는것이다. false는 틀렸다는것
// 다음은 undifined 이라는 데이터 타입인데  선언을 했지만 아무것도 메모리는 잡고있지만 선언은 되어있지 않다. 

// null, false, undifined의 차이에 대해 알아야 한다.

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// 다음은 array에 대해 알아보겠다. 

// const mon ='mon';
// const tue = 'tue';
// const wed = 'wed';

// const week = mon+tue+wed;

// console.log(week)

// const weekArray = [mon,tue,wed];

// console.log(weekArray)

// const nonsense = [1,2,"hello", false, null, true, undefined]

// console.log(nonsense)
// console.log(nonsense[2])

// weekArray.push("sun")

// console.log(weekArray)

// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// player.name
// player.points
// player.handsome44

//만약 리스트로 정리한다면
// const player = ["nico",1212, false, "little bit"]
//object로 선언한다면
// const player = {
//     name: "nico",
//     points:10, 
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"])

// player.fat = false;
// console.log(player)

// const는 수정할수 없지만 오브젝트 안의 내용을 수정할때는 가능하다. 

// player.last = 12;
// console.log(player)
//이렇게 없는 요소도 넣어줄 수 있다.

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//fucntion에 대해 알아보자 
function sayHello(){
    console.log("Hello!");
}

sayHello()