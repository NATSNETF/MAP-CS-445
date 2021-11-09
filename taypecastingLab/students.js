var Student = /** @class */ (function () {
    function Student(firstName, lastName, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.computeAverage = function () {
        var sum = 0.0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        var averageGrade = sum / this.grades.length;
        return averageGrade;
    };
    // Getters
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    return Student;
}());
var grades = [80.5, 95.0, 100];
var anna = new Student("Anna", "Smith", grades);
var avg = anna.computeAverage();
console.log("The Average grade scored by " + anna.getFirstName() + " " + anna.getLastName() + " is " + avg);
