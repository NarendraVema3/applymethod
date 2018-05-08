function addCalculation(a,b,c,d)
{
    return a+b+c+d;
}
 var sum1 = addCalculation(22,26,28,35);
 
 console.log(sum1);
 
 var sum2 = addCalculation.apply(null,sum1);
 
 console.log(sum2);
 
