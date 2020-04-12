// 비어있는 persons 배열을 생성하고 for 루프 본문에서 persons 배열의 끝에 {name : "홍길동", age : 16 + i}객체를 추가한다. 10번 반복하고 persons 배열을 출력한다.
let persons = [];
let index = 10;

for (let i = 0; i < index; ++i) {
    persons[i] = { name: "홍길동", age: 16 + i };
}
console.log(persons);
