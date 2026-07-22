function countSheeps2(sheep) {
  return sheep.filter(value => value === true).length;
}

console.log(countSheeps2([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]))