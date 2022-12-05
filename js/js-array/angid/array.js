const names = ['Ermuun','Temuulen','Usukhbayar','Sukhbat','Ganbold','Amur','Dulguun','Namuunbaigal',
                'Baljinnyam','Anand','Odbayar','Narantsetseg','Aimergen','Tengisbold','Dalaikhuu','Javhlant','Sod-Erdene','Binderya','Indra'];

                // Hamgiin urt neriig olow!
// let longIndex=0;

// for(let i=1; i<names.length; i++){
//     if(names[longIndex].length < names[i].length){
//         longIndex=i;
//     }
// }
// console.log(`${names[longIndex]} has longest name!` );


            // D usgeer ehelsen humuusiin toog olow!
let sum=0;
for(let i=0; i<names.length; i++){
    if (names[i][0] ==='D') {
        sum++;
    }
} console.log(`D usgeer ehelsen hun iit: ${sum}`);


            // Angiin dundaj dun && toon dung usgen duntei haritsuulsn

            const results =[60,70,80,90,95,84,73,62];
            const results2 =[];
            let resultSum=0;
            for(let i=0; i<results.length; i++){
                resultSum+=results[i];
            }
            const avg=resultSum/results.length;
            console.log(avg);

            for(let j=0; j<results.length; j++){
              
                if(0<=results[j] && results[j]<=59){
                    results2[j]= 'F';
                    console.log('F');
                }else if(60<= results[j] && results[j]<=69){
                    results2[j]= 'D';
                    console.log('D');
                }else if(70<= results[j] && results[j]<=79){
                    results2[j]= 'C';
                    console.log('C' );
                }else if(80<= results[j] && results[j]<=89){
                    results2[j]= 'B';
                    console.log('B' );
                }else if(90<= results[j] && results[j]<=100){
                    results2[j]= 'A';
                    console.log('A' );
                }
                
            }console.log(results2);
            