function solution(string) {
  return string.split("").map(char => {
        if(char === char.toUpperCase()){
            return " " + char
        }

        return char;
  }).join("");
}

console.log(solution('camelCase'));
