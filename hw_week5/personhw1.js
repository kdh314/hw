//배열을 age 내림차순으로 정렬하여 출력하는 코드

let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정,", age: 18 },
    { name: "전우치", age: 19 }
];

persons.sort((a1, a2) => a2.age - a1.age);
console.log(persons);