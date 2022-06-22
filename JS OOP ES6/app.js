class Employee {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }

    getKalem() { // Classlara değişken atamak istedğimizde
        return 'kalem';
    }

    showInfos() {
        console.log("name :" + this.name + " yaş: " + this.age + " maaş: " + this.salary);
    }

    static getWorkTimes() {
        console.log("08:00/17.00");
    }
}

class Teacher extends Employee { // miras alma işlemi yapılıyor
    constructor(name, age, hero) {
        super(name, age) // miras aldığımız nesne'nin yapıcı özelliklerini almak için super özelliği kullanılır
        this.hero = hero
    }
    showInfos() {
        console.log("İsim :" + this.name + " Yaş :" + this.age + " hero :" + this.hero);
    }
}

let val = "Bir";
Object.defineProperty(Employee, 'kalem', {
    get() { return val },
    // writable: true,
    configurable: true
})
let content = new Employee("Berkan", 19, 1500);
let content2 = new Teacher("Berkan2", 19, "1500");
content2.showInfos();
content.showInfos();
Employee.getWorkTimes(); // Static class methodlarda class'ın direkt ismi ile çağırılır çünkü statick classlar her yerde ortaktır
console.log(content.getKalem());

console.log(content.constructor.kalem) // defeindProperty ile oluşturulan veri constructor üzerinden çağrılır 
    // console.log(content.kalem)