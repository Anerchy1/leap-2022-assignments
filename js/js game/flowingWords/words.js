const words = [
'result',
'familiar',
'hover',
'tragedy',
'brainstorm',
'outfit',
'old',
'ceiling',
'ethics',
'vacuum',
'prince',
'barrier',
'exploration',
'head',
'care',
'volunteer',
'smooth',
'queue',
'distant',
'cooperative',
'determine',
'division',
'winter',
'debt',
'customer',
'chaos',
'format',
'water',
'frequency',
'shower'
];
const gameBackGr = document.querySelector('#gameBackground');
let pWords=[];
const startNewGame = document.querySelector('#startNewGame');
const input = document.querySelector('input');

function draw(){
    for(let i=0; i<words.length; i++){
        const word = document.createElement('div')
        word.classList.add('text')
        word.innerHTML = words[i];
        gameBackGr.appendChild(word);
        pWords.push(word);
    }
}
// function draw(){
//     for(let i=0; i<words.length; i++){
//         const word = document.createElement('div')
//         word.classList.add('text')
//         word.innerHTML = words[i];
//         gameBackGr.appendChild(word);
//         words.push(word);
//     }
// }

document.addEventListener('click', function(){
    let index = 0;
    setInterval(()=>{
    pWords[index].classList.add('active');
    index++;
   },2000);
  
});


input.addEventListener('input', (e) =>{
    const input = e.target;
    const indexFound = words.indexOf(input.value);
    if(indexFound!==-1){
        words.splice(indexFound,1);
        draw();
        input.value = "";
    }
})
draw();
// input.addEventListener('input', (e)=>{
//     const input = e.target;

//         let index = 0;
//         setInterval(()=>{
//             if(pWords[index] === input.value){
//                 pWords[index].classList.remove('active');
//                 index++;
//                 draw();
//                 input.value = "";
//             }
//         },500);
        
// });