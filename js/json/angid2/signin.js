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
const Specials = '?@#$%&*.!';
const Numbers = '0123456789';


const checker = document.querySelector('.checker');
passwordTarget.addEventListener('click', ()=>{
    checker.classList.add('clicked');
});

const smallLetTarget = document.querySelector('#smallLet');
const upperLetTarget = document.querySelector('#upperLet');
const specialTarget = document.querySelector('#special');
const numberTarget = document.querySelector('#number');
const passLengthTarget = document.querySelector('#passLength');

const passwordChecker = (password, repassword)=>{
    let small = false;
    let upper = false;
    let special = false;
    let number = false;
    let match = false;
    let isAllGreen = false;

    for(let char of password){
        if(!small) small = SmallLetter.includes(char)
        if(!upper) upper = UpperLetter.includes(char)
        if(!special) special = Specials.includes(char)
        if(!number) number = Numbers.includes(char)
    }
    match = password === repassword ;
       if(match === true && small === true && upper === true && special === true && number === true){
       isAllGreen = true
    }
    return {
        match , small , upper , special , number , isAllGreen,
    }
};

passwordTarget.addEventListener('input',()=>{
    let password = passwordTarget.value;
    let repassword = repasswordTarget.value;
    let passwordInfo = passwordChecker(password, repassword);
    if(passwordInfo.small){
        smallLetTarget.classList.remove('invalid');
        smallLetTarget.classList.add('valid');
    }else{
        smallLetTarget.classList.remove('valid');
        smallLetTarget.classList.add('invalid');
    }
    if(passwordInfo.upper){
        upperLetTarget.classList.remove('invalid');
        upperLetTarget.classList.add('valid');
    }else{
        upperLetTarget.classList.remove('valid');
        upperLetTarget.classList.add('invalid');
    }
    if(passwordInfo.special){

        specialTarget.classList.remove('invalid');
        specialTarget.classList.add('valid');
    }else{
        specialTarget.classList.remove('valid');
        specialTarget.classList.add('invalid');
    }
    if(passwordInfo.number){
        numberTarget.classList.remove('invalid');
        numberTarget.classList.add('valid');
    }else{
        numberTarget.classList.remove('valid');
        numberTarget.classList.add('invalid');
    }if(password.length >= 8){
        passLengthTarget.classList.remove('invalid');
        passLengthTarget.classList.add('valid');
    }else{
        passLengthTarget.classList.remove('valid');
        passLengthTarget.classList.add('invalid');
    } 
     if(passwordInfo.isAllGreen){
        submitBtn.classList.remove('disabled');
    }
    else{
        submitBtn.classList.add('disabled');
    } 
}); 
repasswordTarget.addEventListener('input', ()=>{
    let password = passwordTarget.value;
    let repassword = repasswordTarget.value;
    let passwordInfo = passwordChecker(password, repassword);
    if(passwordInfo.isAllGreen){
        submitBtn.classList.remove('disabled');
    }
    else{
        submitBtn.classList.add('disabled');
    }
});
