let arr = [];
for (let index = 0; index < 100; index++) {
    arr.push(Math.floor(Math.random() * 100 + 1));
}
for (let index = 0; index < 100; index++) {
    if (arr[index] % 2 == 0) {
        arr.splice(index, 1);
        index--;
    }
}
console.log(arr);