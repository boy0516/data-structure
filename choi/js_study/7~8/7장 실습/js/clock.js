const clock = document.querySelector("h2#clock");
//쿼리셀렉터로 테그 골라주고
clock.innerText = "alalal"

//그럼 이제 intervals 와 timeout에 대해 먼저 이야기 해보자

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText= `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);
//5초마다 sayHello 반복

///////////////////////////////////
///////////////////////////////////

// 우리가 01, 02, 이렇게 0으로 시작하고싶으면
// padStart() 라는 함수를 쓰면 편하다. 

// "1".padStart(2,"0")
// 이렇게 쓰면 결과값이 "01"이 된다. 

