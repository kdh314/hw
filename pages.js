//학생 수와 페이지 크기가 각각 주어졌을 때, 페이지 수를 계산해서 출력하는 코드

let studentCount = 31;
let pageSize = 10;

let pageCount = Math.ceil(studentCount/pageSize);

console.log(pageCount);