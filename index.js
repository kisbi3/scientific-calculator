// 일단 javascript로 백엔드를 해보고, 이를 django로 옮겨보자.

// ㅅㅂ 왜 안됨?

// const : 상수(한번 할당하면 재할당 불가)
// Document.querySelector()는 선택된 선택자 또는 선택자 그룹과 일치하는 문서 내 첫 번째 Element를 반환한다. 일치하는 요소가 없으면 null을 반환한다.
// Document.querySelectorAll()는 선택된 선택자 그룹에 일치하는 도큐먼트의 엘리먼트 '''리스트'''를 나타내는 NodeList를 반환합니다.
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

// let : 변수 선언
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

// (문자).length : 문자의 길이
// 숫자의 경우에는 지원하지 않으므로, n.toString().length 으로 문자열로 바꿔서 사용한다.
for(let i = 0; i<numbers.length; i++){
    // addEventListener : Event를 등록하는 명령어
    // 여기서 numbers는 맨 윗부분에 있는 const numbers를 말함.
    numbers[i].addEventListener('click', (e) => {
        // event.target은 이벤트가 발생한 요소를 반환해준다. 
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstValue(atr);
        }
        if(isSecondValue == false) {
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if(firstValue != "" && sign != ""){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue; 
    }
}

function getSign() {
    debugger
    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', ()=> {
    debugger;
    result.innerHTML = "";
    if(sign === "+"){
        resultValue = firstValue + secondValue;
    }    else if(sign === "-"){
        resultValue = firstValue - secondValue;
    }    else if(sign === "X"){
        resultValue = firstValue * secondValue;
    }    else if(sign === "/"){
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    second = "";

    checkResultlength();
})

function checkResultlength(){
    resultValue = JSON.stringify(resultValue);
    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue !=""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})

percent.addEventListener("click", () => {
    result.innerHTML = "";
    if(firstValue !=""){
        resultValue = firstValue/100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue/100;
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})