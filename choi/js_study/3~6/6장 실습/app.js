// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button")
// document가 아니라 loginform에서 더 자세하게 선택할 수 있다. 

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     if (username === ""){
//         alert("please write your name")
//     } else if(username.length > 15) {
//         alert("Your name is too long.")
//     }
    
// }

// loginButton.addEventListener("click", onLoginBtnClick)

//위와 같이 user가 입력한 값을 검증해주는 연습은 매우 중요하지만 브라우저가 자체적으로 제공하는 기능을 이용하는 것 역시 매우 중요하다.
// html에서 required maxlength ="15"를 이용하면 입력값은 15자로 제한할 수 있다. 

//또한 지금은 html에서 input값에 대해 유효성 검사를 해주고 있지 않다. 검사를 위해 input은 form태그 안에 있어야 된다. 

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

//html에서 form으로 감싸주고 다시 진행해보자.

// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button")
// // document가 아니라 loginform에서 더 자세하게 선택할 수 있다. 

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     console.log(username)
    
// }

// loginButton.addEventListener("click", onLoginBtnClick)

// button을 누르면 submit되어서 페이지가 새로고침 되는것을 확인할 수 있다. 

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(event)
//     const username = loginInput.value;
//     console.log(username);
// }

// loginForm.addEventListener("submit", onLoginSubmit)

// preventDefault()는 event의 기본행동이 뭐든지 발생되지 않도록 막는것이다. 
//예를들어 자동 새로고침등을 막아줌. 

//submit event를 탐지하면 자동으로 Argument를 function에 전달합니다.
//위에서 event로 Argument를 받아주고 있는데 이를 통해서 이벤트가 발생시 전달되는 Argument를 확인할 수 있습니다.

//함수에서 event의 Argument를 받을 때는 변수 명을 event로 하는 것이 관행이다.

//혼동되는 개념
//Parameter는 함수 혹은 메서드 정의에서 나열되는 변수 명입니다. 반면 Argument는 함수 혹은 메서드를 호출할 때, 전달 혹은 입력되는 실제 값입니다. 


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////



//이번에는 submit 이후에 제출form을 사라지게 하는 것을 할것이다.


// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting")

// const HIDDEN_CLASSNAME = "hidden" //대문자로 쓰는 이유는 관행적으로 string만 포함한 변수는 대문자로 표현한다.

// function onLoginSubmit(event) {
//     event.preventDefault();
//     const username = loginInput.value;
//     console.log(username)
//     loginForm.classList.add(HIDDEN_CLASSNAME)

//     greeting.innerText = "Hello "+ username;
//     greeting.innerText = `Hello ${username}`;
//     //위 두개다 같은 기능을 수행한다. 문자열 합쳐줌.
//     // 중요한건 두번째 방법에서는 백틱``을 사용해야한다.
//     greeting.classList.remove(HIDDEN_CLASSNAME)
// }

// loginForm.addEventListener("submit", onLoginSubmit)


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


//다음은 local storage를 이용해서 값을 저장하는 것을 하겠다.

//console에다가 localStorage.setItem("username","nico")라고 입력하면 스토리지에 저장된다.
// localStorage.getItem("username")이라고 치면 nico가 반환된다. 
// localStorage.removeItem("username")이라고 치면 값이 삭제된다. 



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden" //대문자로 쓰는 이유는 관행적으로 string만 포함한 변수는 대문자로 표현한다.
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username)
    loginForm.classList.add(HIDDEN_CLASSNAME)

    paintGreetings(username)

    localStorage.setItem(USERNAME_KEY, username)
    //이렇게 로컬스토리지에 저장해준다.
}

function paintGreetings(username){
    //greeting.innerText = "Hello "+ username;
    greeting.innerText = `Hello ${username}`;
    //위 두개다 같은 기능을 수행한다. 문자열 합쳐줌.
    // 중요한건 두번째 방법에서는 백틱``을 사용해야한다.
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
// 자주 사용하는 코드를 paintGreetings로 함수화 해서 이용


const savedUsername = localStorage.getItem(USERNAME_KEY);
// localStorage에 값이 없다면 null값을 반환받는다.

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else {
    paintGreetings(savedUsername)
}
//if 문을 통해서 localStorage에 저장되어있는 username을 출력 또는 입력받음

 
