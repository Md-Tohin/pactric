class Teacher{
    id;
    name;
    class = 'Ten';
    designation = 'Asst. Teacher';
    salary;

    constructor(id ,name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getSalary(salary) {
        console.log(`Your Salary is : ${salary}`);
    }

    getName(){
        console.log(`Your name is : ${this.name}`);
    }


}

const teacher1 = new Teacher(101, 'Anisul Islam', 32000);
console.log(teacher1);

const teacher2 = new Teacher(102, 'Kamal Uddin', 25000);
console.log(teacher2);
console.log(teacher2.getName());