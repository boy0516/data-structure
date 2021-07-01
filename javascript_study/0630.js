// document.title="Hello! From JS!"
// // html이 아니라 js가 title로 적용될 것

// const title = document.getElementById("something");

// title.innerText = "Got ya!"

// console.log(title.className);
// const hellos = document.getElementsByClassName("hello");

// console.log(title);

// const title = document.getElementsByTagName("h1");

const title = document.querySelector("div.hello:first-child h1");
function handleTitleCLick(){
    console.log("title was clicked");
    title.style.color = "blue";
    h1.className = "active";
}

function handleMouseEnter(){
    title.innerText = "mouse is here!";
}
function handelMouseLeave(){
    title.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("ah-ha!");
}
function active

title.addEventListener("click",handleTitleCLick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handelMouseLeave);


window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);