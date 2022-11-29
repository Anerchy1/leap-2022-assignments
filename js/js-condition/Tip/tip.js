let gonchigoo= parseInt(prompt('Heden tugrug oruulah ve?'))

let a=3000, b=27500,c=100000;

// if(a>=5000 && a<=30000){
//     a+=(a*15)/100;
//     console.log(a);
// }else{
//     a+=(a*20)/100;
//     console.log(a);
// }

let result = gonchigoo>=5000 && gonchigoo<=30000 ?  gonchigoo+=(gonchigoo*15)/100: gonchigoo+=(gonchigoo*20)/100;

console.log('Tanii niit tulbur: ',result);