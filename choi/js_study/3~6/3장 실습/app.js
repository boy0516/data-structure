//브라우저의 핵심이 되는 object에 대해 보겠다. 

//웹 브라우저 콘솔에 document를 입력하면 작성한 html문서를 가져올 수 있다. 
//그리고 console.dir(document)를 입력하면 작성한 html 문서를 object로써 가져올 수 있다.
//예를 들면 document.title을 입력하면 타이틀을 가져올 수있다. 

//또한 document.title='hi'를 콘솔에 입력하면 타이틀을 변경 할 수 있다.

//document.location을 치면 위치를 보여준다. 아무튼 매우 유용하게 써먹을 수 있을것이다. 


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// const title = document.getElementById('title');

// title.innerText = "got you"
// console.dir(title);

// console.log(title.id)
// console.log(title.className)

//위와 같은 방법으로 html의 object를 가져와서 컨트롤하는것이 자바스크립트의 시작이다.


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

 
// html에서 같은 className의 오브젝트를 여러개 생성한 이후 
// const title = document.getElementById('title');
// 이렇게 호출하게 되면 Id가 없어서 에러가 뜨게된다 

// const title = document.getElementsByClassName("title")

// console.log(title)
//출력해보면 배열 형태로 나타나게된다. 

//또는 element를 가지고오는 방법으로 TagName을 이용해보자 
// const tags = document.getElementsByTagName('h1')
// console.log(tags)

//마찬가지로 배열 형태로 h1테그의 모든 값을 가져온다.

//우리가 사용하고 싶은 더 디테일한 값을 선택하기 위해
// querySelector를 이용할 수 있다. 

// const title = document.querySelector('.hello h1');
// console.log(title)
 
//이런식으로 element를 가져올 수 이다.

//만약 className이 hello이고 h1테그를 가진 값이 많다면 querySelector는 첫번째 값만 가져온다.
//만약 모두를 가져오고싶으면 querySelectorAll을 이용하면된다.

// const title = document.querySelectorAll('.hello h1');
// console.log(title)

//querySelectorAll을 이용하면 배열형태로 조건에 맞는 값을 모두 가져온다. 

// 만약 id를 이용해서 찾고싶을때도 querySelector를 이용할 수 있다. 

// const title = document.querySelector('#hello')
// 이렇게 #을 서주면 id를 이용해서 선택하겠다는 뜻이다. 


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


//다음은 eventlister에 대해 알아보겠다. 
//예를들어 click을 감지하는 eventlistenr에 대해 알아보겠다.

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     console.log("title was clicked!");
//     h1.style.color = 'blue'
// }

// function handleMouseEnter(){
//     console.log("mouse is here");
//     h1.innerText = "Mouse is here!"
    
// }

// function handleMouseleave(){
//     console.log("mouse is leave");
//     h1.innerText = "Mouse is leave!"
    
// }

// function handleWindowResize(){ //윈도우 크기를 조정할때 발동한다.
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!")
// }

// function handleWindowOffline(){
//     alert("SOS no wifi")
// }

// function handleWindowOnline(){
//     alert("All good wifi")
    
// }
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseleave);

// event로 handelTitleClick을 실행한다.
// 괄호를 붙이지 않는 이유는 실행을 시키는것이 아니라 이름만 넘겨줘성 클릭했을시 그 이름을 가진 함수를 실행시키기 위해서임.

//event를 헨들링하기 위해선 event종류에 대해 알아야한다. 
// 다양한 event에 대해서는 검색을 통해 숙지하도록 하자.



//또한 위의 eventListener는 다음과 같이 작성할 수 있다. 
// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseleave;


//하지만 이 둘의 방법중 addEventListener를 더 선호하는 이유는 removeEventListener로 삭제할 수있기 때문이다.


// window.addEventListener("resize", handleWindowResize)
//윈도우 크기를 조정할때 발동하는 이벤트이다. 
//window는 브라우저에 자체 내장되어있는 element이다.

// window.addEventListener("copy", handleWindowCopy)
// copy를 하면 발동하는 이벤트 

// window.addEventListener("offline", handleWindowOffline)

// window.addEventListener("offline", handleWindowOnline)
//이런식으로 와이파이여부를 이벤트로 감지할 수 있다. 


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     if(h1.style.color === "blue"){
//         h1.style.color = 'tomato'; // setter
//     } else{
//         h1.style.color = 'blue'; // setter
//     }
    
// }
// 위와 같이 파랑과 토마토 색이 번갈아 나오게 할 수 있다.

//하지만 h1.style.color를 이렇게 많이 호출하기 보다는, 
// 먼저, 이 color의 현재 상태를 저장하는 것을 해보자.
// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = 'tomato'; // setter
//     } else{
//         newColor = 'blue'; // setter
//     }
//     h1.style.color = newColor
// }

//위와 같이 변수들을 이용해서 getter로 상태를 호출하는 것을 줄일 수 있다.

// h1.addEventListener("click", handleTitleClick)


// 그렇지만 강사는 js코드에 css가 섞이는것을 선호하지 않는다. 
//그래서 css파일에서 css코드를 다루는것을 더 선호한다고 한다. 


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick(){
//     if (h1.className === "active_h1"){
//         h1.className=""
//     }else{
//         h1.className = "active_h1";
//     }
// }
// 이런식으로 h1의 class를 변경시켜주면서 css속성을 바꾸어준다. 

// h1.addEventListener("click", handleTitleClick);

//하지만 이런 코드에는 몇가지 불안정한 요소가 있다.
//예를 들어 active_h1은 내가 정해준 className이기때문에 오타가 발생하면 동작하지 않는다. 하지만 우리는 단순한 오타에도 에러를 찾기 까다로울 수 있다. 
//raw value를 const를 이용해서 상수로 정해주면 여러번 반복해서 들어가는 값에 대해 좀더 안정적으로 입력해줄 수 있다. 

// function handleTitleClick(){
//     const clickedClass = "clicked"
//     if (h1.className === clickedClass){
//         h1.className=""
//     }else{
//         h1.className = clickedClass;
//     }
// }
// h1.addEventListener("click", handleTitleClick);

//이런 느낌으로 작성하면 오류가 발생하면 console에서 log로 알려줄것이다.

//문제가 한가지 더 있는데 className을 변경해줄 때 모든 className을 대체해 버린다는 것이다. 
//예를들어 class="font" 라고 지정해 두었는데 위 코드를 이용하면 class="font"가 사라지게된다.

//이를 해결하기위해 두가지를 보겠다 

// className을 바꾸는 다른 방법과 , classList를 이용하는 방법에 대해 알아 보겠다. 

// function handleTitleClick(){
//     const clickedClass = "clicked"
//     if (h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     }else{
//         h1.classList.add(clickedClass);
//     }
// }
// h1.addEventListener("click", handleTitleClick);

// 이런식으로 기존 class를 남겨두고 변경해줄 수 있다. 


// 위와 같은 기능을 이용해야할 일은 너무나 많다. 그래서 toggle이라는 함수가 따로 존재한다.

function handleTitleClick(){
    const clickedClass = "clicked"
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);

// toggle을 이용하면 위와 같다.
