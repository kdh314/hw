//위 문제의 문자열에서 공백을 모두 제거한 새 문자열을 만들고, 그 문자열을 출력하시오.
let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

function delete_whitespace(str){
    return str.replace(/[ ]/g, "");
}
console.log(delete_whitespace(str));