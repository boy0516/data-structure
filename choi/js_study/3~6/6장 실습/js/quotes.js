const quotes =[
    {
        quote:"choi123",
        author: "choi1"
    },
    {
        quote:"choi234",
        author: "choi2"
    },
    {
        quote:"choi345",
        author: "choi3"
    },
    {
        quote:"choi456",
        author: "choi4"
    },
    {
        quote:"choi567",
        author: "choi5"
    },
    {
        quote:"choi678",
        author: "choi6"
    },
    {
        quote:"choi789",
        author: "choi7"
    },
    {
        quote:"choi890",
        author: "choi8"
    },
    {
        quote:"choi901",
        author: "choi9"
    },
    {
        quote:"choi012",
        author: "choi0"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//우리가 이번에 쓸거는 Math.random을 이용해서 1~9사이의 숫자를 얻을거다.

//그런데 Math.random()을 이용해서얻을 수 있는 수는 실수이므로
// Math.round()나
// Math.ceil(1.9)  -> 2 올림
// Math.floor(1.9) -> 1 내림

//이런거를 이용해서 랜덤수를 구할 수 있다. 
//quotes.length를 쓰면 quotes의 길이를 구할 수 있다. 