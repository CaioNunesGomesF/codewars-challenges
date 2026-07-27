function boolToWord( bool ){
  const lowerBool = bool.toLowerCase(); 
  if(lowerBool === 'yes'){
    return true;
  }
  return false;
}

console.log(boolToWord('Ye'));