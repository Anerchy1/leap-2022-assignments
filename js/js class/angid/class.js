class Student{
    name;
    birthYear;
    weight;
    height;

    constructor(name,birthYear,weight,height){
        this.name = name;
        this.birthYear = birthYear;
        this.weight = weight;
        this.height = height;
    }

    getBMI(){
        return this.weight / (this.height ** 2);
    }
    getAge(){
        return new Date().getFullYear - this.birthYear;
    }
}

const generateNumber = (min , max) =>{
    return Math.round(Math.random()*(max-min)+ min);
}


let thisYear = new Date().getFullYear();
const students = [ ];

for(let i=0; i<20; i++){
    let student =new Student('Student' + i , generateNumber(1970, 2003) , generateNumber(50, 100), generateNumber(150, 200));
    students.push(student);
}
let averageBMI=0;
let averageAge=0, studentWithMaxBMI, studentWithMinBMI, youngest, oldest;

// 1. Calculate BMI average
for(i=0; i<20; i++){
    averageBMI += ((students[i].weight) / ((students[i].height/100)**2))/20;
}
// 2. Calculate Age average
for(i=0; i<20;i++){
    averageAge += (thisYear - students[i].birthYear) / 20;
    
}
// 3. Find highest BMI person
// 4. Find lowest BMI person
// 5. Find youngest
// 6. Find oldest

//1. 


class AverageBMI extends Student{
    constructor(){
        super(this.name,this.birthYear, )
    }
}

console.log(`Angiin dundaj nas :${averageAge}`);
console.log(averageBMI);