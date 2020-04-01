//위 문자열에서 모음(aeiou)들의 위치를 출력하는 코드를 구현하시오.
let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
/*
for (let index = 0; index < str.length; index++) {
     if (str[index] === /[aeiou]/gi){
        console.log(index);}
}
console.log(str);
*/
console.log(str);
function voweltoindex(str) {
    return str.replace(/[aeiou]/gi, (vowel, offset) => offset);
}
console.log(voweltoindex(str));
