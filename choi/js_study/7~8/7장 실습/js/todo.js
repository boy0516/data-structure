const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input")
const toDoInput = document.querySelector("#todo-form input")
//위 두개는 같은 말이다. 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    //어떤 버튼이 눌렸는지를 event를 분석해서 알아낸다.
    //이 경우는 path를 찾아서 이용한다.
    //console.dir(event.target) 여기서는 parentNode에 부모가 나온다.
    const li = event.target.parentElement

    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    //필터를 이용해서 id가 같은 것은 false를 반환해서 걸러준다.
    saveToDos()
    //마지막으로 저장해준다.
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    // 만들어지는 li에 id를 넣어준다.

    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // json형태로 저장되어있으니까 newTodo.text로 불러준다. 
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo) 
    li.appendChild(span);
    li.appendChild(button)
    
    toDoList.appendChild(li)
    
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }

    toDos.push(newTodoObj)
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     //자바스크립트에서 처리하고있는 item을 제공해준다.
//     console.log("hello", item)
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !=null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos  = parsedToDos;
    parsedToDos.forEach(paintTodo)
    // parsedToDos.forEach((item) => console.log("this is the turn of", item)) 
    //각 요소마다 한번씩 함수가 실행된다. 
    
}

// 필터 예시
// function secyFileter(){

// }
// //필터는 true를 리턴해야한다. 배열을 유지하고싶다면 
// //새로만들어진 배열에 true값들을 포함하고 생성한다.

// [1,2,3,4].filter(secyFileter)

