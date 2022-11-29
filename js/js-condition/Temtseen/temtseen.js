let a1 = 88, a2 = 106, a3 = 110;
let b1 = 88, b2 = 106, b3 = 110;

let aver1 = (a1 + a2 + a3) / 3,
    aver2 = (b1 + b2 + b3) / 3;

if (aver1 > 100 || aver2 > 100) {
    if (aver1 > aver2) {
        console.log('Winner is: A Team', aver1);
    } else if( aver1 === aver2){
        console.log('Tied');
    } else{
        console.log('Winner is: B Team', aver2);
    }
} else {
    console.log('No winner');
}


