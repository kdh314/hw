let arr = [];

for (let index = 0; index < 100; index++) {
    arr.push(Math.floor(Math.random() * 100 + 1));
}
arr.sort(compare);
console.log(arr);

function compare(a,b){
    return a-b;
}