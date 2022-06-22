// const emp1 = {
//     name: "Berkan",
//     age: 19,
//     showInfos() {
//         console.log(this.name + " " + this.age);
//     }
// }

// emp1.showInfos()

function Employee(name, age, salary) { // Yapıcı fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
}

// const emp1 = new Employee(); // Counstructor çağırma
// console.log(emp1.name);

const emp1 = new Employee("Berkan", 19, 3000);
const emp2 = new Employee("Kübra", 22, 5000);
console.log(emp2.a);



function process1(callback) {
    setTimeout(() => {
        console.log('Process 1');
        callback()
    }, 3000);
}

function process2() {
    setTimeout(() => {
        console.log('Process 2');
    }, 2000);
}

process1(process2)


const person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    shwoInfos: function() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}


setTimeout(person.shwoInfos.bind(person), 3000);

//setTımeout(person.showInfos,3000) hata veriyor this özelliğine ulaşamadık bind ile person'ı bir daha çağırdık