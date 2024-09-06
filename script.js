console.log("katakury")

class student{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }

    
}
let student1 = new student("Eunjae", 2022)
console.log(student1)
console.log(student1.age())

//A2

class Car{
    constructor(brand){
        this.carname = brand
    }

    carAvailable(){
        return "I have a " + this.carname;
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand)
        this.model = model
    }

    showCars(){
        return this.carAvailable()+" it is a "+this.model;
    }
}

let myCar = new Model("Ford", "Mustang")
//console.log(myCar)
console.log(myCar.showCars())