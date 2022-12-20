const rawEgg= 'Tuuhii undug';

function cookEgg(rawEgg) {
    const isForgetToFlip = true;
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(!isForgetToFlip){
                resolve('Cooked Egg');
            }else{
                reject('Half burnt egg');
            }
        }, 2000);
    });
    return promise;
}

let result;
cookEgg(rawEgg).then(function(res){
    result = res;
    console.log(result);
    
}).catch(function(err){
    console.log(err);
});
// /`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`\

function getAnEgg(){
    const eggCount = 12;
    const promise = new Promise((resolve,reject)=>{
        if(eggCount>0){
            resolve(true);
        }else reject('Run out of egg');
    });
    return promise;
}

function pickPot(){
    const isPotInUse = false;
    const promise = new Promise((resolve,reject)=>{
        if(!isPotInUse){
            resolve(true);
        }else reject('Pot in use');
    });
    setTimeout(()=>{
        return promise;
    },1000);
}

function getWater(){
    const isWaterAvailable = true;
    const promise = new Promise((resolve,reject)=>{
        if(isWaterAvailable){
            resolve(true);
        }else reject('No water');
    });
    return promise;
}

function startStove(){
    const isStoveWorking = true;

    return new Promise((resolve,reject)=>{
        if(isStoveWorking){
            resolve(true);
        }else reject('Stove is not working');
    });
}

function boilEgg(){
    const timer = 10;
    return new Promise((resolve,reject)=>{
        if(timer >= 10){
            resolve('Cooked egg');
        }else reject('timer was too short to boil egg , so we get raw egg');
    });
}

const cookedEgg = getAnEgg()
    .then(()=>{
        console.log('picked an egg');
        pickPot();
    })
    .then(()=>{
        console.log('picked a pot');
        getWater();
    })
    .then(()=>{
        console.log('filled pot');
        startStove();
    })
    .then(()=>{
        console.log('started stove');
        boilEgg();
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.error(err);
    })