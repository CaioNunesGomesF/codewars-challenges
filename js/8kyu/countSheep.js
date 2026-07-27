var countSheep = function (num){
  let result = [];
  for(let i=1;i<=num;i++){
    result.push(`${i } sheep...`)
  }
  return result.join("");
}

console.log(countSheep(2))