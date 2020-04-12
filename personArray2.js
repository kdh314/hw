// personArray1.js와 동일하게 persons1 배열을 생성하고 복제하여 persons2 배열을 생성한다.
let persons1 = [];

let index = 10;

for (let i = 0; i < index; ++i) {
    persons1[i] = { name: "홍길동", age: 16 + i };
}

let persons2 = Object.assign([],persons1)

console.log(persons2);
