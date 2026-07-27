export function evenOrOdd(n:number):string {
  if(n % 2 == 0){
    return 'Even';
  }

  return 'Odd'
}

console.log(evenOrOdd(1));