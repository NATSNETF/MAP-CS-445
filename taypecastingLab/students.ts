class Student {
    private firstName:string;
    private lastName:string;
    private grades:number[]; // private grades:Array<number>;

    constructor(firstName:string, lastName:string,grades:number[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }

    addGrade(grade:number) :void{
        this.grades.push(grade);
    }

    computeAverage():number{
        let sum:number= 0.0;
        for(let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        const averageGrade:number= sum/this.grades.length;
        return averageGrade;
    }

    // Getters
    getFirstName():string{
        return this.firstName;
    }

    getLastName():string {
        return this.lastName;
    }
}

const grades = [80.5, 95.0, 100];
const anna = new Student("Anna", "Smith", grades);
const avg = anna.computeAverage();
console.log(`The Average grade scored by ${anna.getFirstName()} ${anna.getLastName()} is ${avg}`);