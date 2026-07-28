export function openOrSenior(data:number[][]):string[]{
  const result =  data.map((age) => {
    return (age[0] >= 55 && age[1] > 7) ? 'Senior' : 'Open';  
  })

  return result;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));