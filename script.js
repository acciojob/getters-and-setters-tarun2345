class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Example usage
let person = new Person("John", 30);
console.log(person.name); // Output: "John"
person.age = 35;
console.log(person.age); // Output: 35

let student = new Student("Jane", 20);
console.log(student.name); // Output: "Jane"
student.study(); // Output: "Jane is studying."

let teacher = new Teacher("Alice", 40);
console.log(teacher.name); // Output: "Alice"
teacher.teach()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
