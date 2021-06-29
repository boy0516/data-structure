// document.title="Hello! From JS!"
// // html이 아니라 js가 title로 적용될 것

// const title = document.getElementById("something");

// title.innerText = "Got ya!"

// console.log(title.className);
// const hellos = document.getElementsByClassName("hello");

// console.log(title);

// const title = document.getElementsByTagName("h1");

const title = document.querySelector("div.hello:first-child h1");
console.log(title); 
title.innerText = "Hello";
const title_sec = document.querySelector("div.hello:second-child h1");
title_sec.innerText = "second greetings";