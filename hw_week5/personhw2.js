// 배열에서 age 최대값 사람을 찾아서 출력하는 코드

let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
];

let max = persons.reduce((a1, a2) => a1.age > a2.age ? a1.age : a2.age);
let index = persons.findIndex(p => p.age == max);
let person = persons[index].name;

console.log(person);

