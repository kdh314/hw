
let count = 0;

let id = setInterval(printTime, 1000, "");

function printTime(msg) {
    console.log(++count, new Date());
    if (count == 10)
        clearInterval(id);

}