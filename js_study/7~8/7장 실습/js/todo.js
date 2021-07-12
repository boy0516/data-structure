const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input")
const toDoInput = document.querySelector("#todo-form input")
//위 두개는 같은 말이다. 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = 'todos'

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    //어떤 버튼이 눌렸는지를 event를 분석해서 알아낸다.
    //이 경우는 path를 찾아서 이용한다.
    //console.dir(event.target) 여기서는 parentNode에 부모가 나온다.
    const li = event.target.parentElement
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span");
    span.innerText = newTodo;
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
    toDos.push(newTodo)
    paintTodo(newTodo);
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
    parsedToDos.forEach(paintTodo)
    // parsedToDos.forEach((item) => console.log("this is the turn of", item)) 
    //각 요소마다 한번씩 함수가 실행된다. 
    

}