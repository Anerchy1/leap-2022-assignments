const emailTarget = document.querySelector('#email');
const passwordTarget = document.querySelector('#password');
const repasswordTarget = document.querySelector('#repassword');

const getFieldValues = () =>{
    return {
        email: emailTarget.value,
        password: passwordTarget.value,
        repassword: repasswordTarget.value,
    };
};

const signUpSubmit = () =>{
    const values = getFieldValues();
    fetch('http://localhost:3333/api/signup',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
    }).catch((res)=>{
        console.warn(res);
    })
};
// http://localhost:3333/api/signup POST ${values}

const submitBtn =  document.querySelector('button');

submitBtn.addEventListener('click', signUpSubmit);


const UpperLetter = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const SmallLetter = 'qwertyuiopasdfghjklzxcvbnm';
const Specials = '?@#$%&*.';
const Numbers = '0123456789';


const checker = document.querySelector('.checker');
passwordTarget.addEventListener('click', ()=>{
    checker.classList.add('clicked');
});

const smallLet = document.querySelector('#smallLet');
const upperLet = document.querySelector('#upperLet');
const special = document.querySelector('#special');
const number = document.querySelector('#number');
const passLength = document.querySelector('#passLength');
passwordTarget.onkeyup = function(){
    if(passwordTarget.value.includes(UpperLetter)){
        smallLet.classList.remove('invalid');
        smallLet.classList.add('valid');
    }
    if(passwordTarget.value.includes(SmallLetter)){
        upperLet.classList.remove('invalid');
        upperLet.classList.add('valid');
    }
    if(passwordTarget.value.includes(Specials)){
        special.classList.remove('invalid');
        special.classList.add('valid');
    }
    if(passwordTarget.value.includes(Numbers)){
        number.classList.remove('invalid');
        number.classList.add('valid');
    }
    if(passwordTarget.value.length >= 8){
        passLength.classList.remove('invalid');
        passLength.classList.add('valid');
    }
}
const passwordChecker = () =>{
    if(passwordTarget.value.includes(UpperLetter)){
        smallLet.classList.remove('invalid');
        smallLet.classList.add('valid');
    }
    if(passwordTarget.value.includes(SmallLetter)){
        upperLet.classList.remove('invalid');
        upperLet.classList.add('valid');
    }
    if(passwordTarget.value.includes(Specials)){
        special.classList.remove('invalid');
        special.classList.add('valid');
    }
    if(passwordTarget.value.includes(Numbers)){
        number.classList.remove('invalid');
        number.classList.add('valid');
    }
    if(passwordTarget.value.length >= 8){
        passLength.classList.remove('invalid');
        passLength.classList.add('valid');
    }
    console.log(passwordTarget.value);
}
passwordChecker();
console.log(passwordTarget.value);
