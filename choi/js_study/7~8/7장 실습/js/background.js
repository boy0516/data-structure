const images = ["0.jpeg","1.jpeg","2.jpeg"]

const choseImages = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");
// 엘리먼트를 생성해준다.
bgImage.src = `img/${choseImages}`
//엘리먼트에 소스 삽입
document.body.appendChild(bgImage)
//엘리먼트를 body에 삽입