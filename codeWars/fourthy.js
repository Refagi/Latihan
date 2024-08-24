function collinearity( x1,y1, x2,y2 ) {

  //cara cepat
  // return x1 * y2 === y1 * x2

 if(x1 == 0 && y1 == 0 && x2 == 0 && y2 == 0){
  return true
 } else {
  if (x1 == 0 && x2 == 0 && y1 !== 0 && y2 !== 0){
    return true
  } else if (x1 !== 0 && x2 !== 0 && y1 == 0 && y2 == 0){
    return true
  } else if (x1 !== 0 && x2 == 0 && y1 == 0 && y2 == 0){
    return true
  } else if (x1 === 0 && x2 !== 0 && y1 == 0 && y2 == 0){
    return true
  } else if (x1 === 0 && x2 == 0 && y1 !== 0 && y2 == 0){
    return true
  } else if (x1 == 0 && x2 == 0 && y1 == 0 && y2 !== 0){
    return true
  } else if (x1 !== 0 && x2 == 0 && y1 !== 0 && y2 == 0){
    return true
  }else if (x1 == 0 && x2 !== 0 && y1 == 0 && y2 !== 0){
    return true
  }else {
    return (x1 / x2) === (y1 / y2)
  }
 }

}

//"collinear vectors"
  console.log( collinearity( 1,1, 1,1 )) //, true, `collinearity( 1,1, 1,1 )` );
  console.log( collinearity( 1,2, 2,4 )) //, true, `collinearity( 1,2, 2,4 )` );
  console.log( collinearity( 1,2, -1,-2 )) //, true, `collinearity( 1,2, -1,-2 )` );
  console.log()


//"non-collinear vectors"
  console.log( collinearity( 1,1, 6,1 )) //, false, `collinearity( 1,1, 6,1 )` );
  console.log( collinearity( 1,2, 1,-2 )) //, false, `collinearity( 1,2, 1,-2 )` );
  console.log()


//"vectors containing zero"
  console.log( collinearity( 4,0, 11,0 )) //, true, `collinearity( 4,0, 11,0 )` );
  console.log( collinearity( 0,1, 6,0 )) //, false, `collinearity( 0,1, 6,0 )` );
  console.log( collinearity( 4,4, 0,4 )) //, false, `collinearity( 4,4, 0,4 )` );
  console.log()

//"zero vectors"
  console.log( collinearity( 0,0, 0,0 )) //, true, `collinearity( 0,0, 0,0 )` );
  console.log( collinearity( 0,0, 1,0 )) //, true, `collinearity( 0,0, 1,0 )` );
  console.log( collinearity( 5,7, 0,0 )) //, true, `collinearity( 5,7, 0,0 )` );
  console.log( collinearity(15, -14, 0, 0))