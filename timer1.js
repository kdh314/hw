//1초 간격으로 현재 시각을 출력한다. 10번만 반복 호출 하고 종료된다.
let count = 0;

let id = setInterval(printTime, 1000, "");

function printTime(msg) {
    console.log(++count, new Date());
    if (count == 10)
        clearInterval(id);

}