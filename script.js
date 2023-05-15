//complete this code
class Person {
	constructor(name,age){
        this.name = name;
        this.age = age;
    }

    get getname(){
        return this.name;
    }
    set setage(newage){
        this.age = newage;
    }
}

class Student extends Person {
    constructor(name){
        this.name = name;
    }
    study(){
        console.log(this.name+" is studying");
    }
}

class Teacher extends Person {
    constructor(name){
        this.name = name;
    }
    teach(){
        console.log(this.name+" is teaching")
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
