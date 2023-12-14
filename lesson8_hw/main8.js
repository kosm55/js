// + Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id=id;
    this.name = name;
    this.surname= surname;
    this.email=email;
    this.phone=phone;
}

    let user1= new User(1, 'sin', 'van', 'some1@)mail.com' , 11111111);
    let user2= new User(2, 'ivan', 'duk', 'some2@)mail.com' , 22222222);
    let user3= new User(3, 'oleg', 'sakovich', 'some3@)mail.com' , 33333333);
    let user4= new User(4, 'anna', 'moka', 'some4@)mail.com' , 44444444);
    let user5= new User(5, 'nina', 'kar', 'some5@)mail.com' , 55555555);
    let user6= new User(6, 'olga', 'pas', 'some6@)mail.com' , 66666666);
    let user7= new User(7, 'dima', 'miron', 'some7@)mail.com' , 77777777);
    let user8= new User(8, 'nikolas', 'claus', 'some8@)mail.com' , 88888888);
    let user9= new User(9, 'lina', 'kama', 'some9@)mail.com' , 99999999);
    let user10= new User(10, 'fedir', 'chik', 'some10@)mail.com' , 1010101010);

    let users=[];
    users.push(user1, user2,user3, user4,user5, user6, user7,user8,user9,user10)
console.log(users)

//
// + Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter=users.filter(function (user){
    return user.id%2===0;
})
console.log(filter)

// + Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort=users.sort(function (us1,us2){
    return us2.id-us1.id
})
console.log(sort)

// + створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
        constructor(id, name, surname , email, phone, order) {
            this.id=id;
            this.name=name;
            this.surname=surname;
            this.email=email;
            this.phone=phone;
            this.order= [order]
        }
}

let Client1= new Client(1, 'sin', 'van', 'some1@)mail.com' , 11111111,  ['mobile', 'book']);
let Client2= new Client(2, 'ivan', 'duk', 'some2@)mail.com' , 22222222, ['mobile', 'book','mouse']);
let Client3= new Client(3, 'oleg', 'sakovich', 'some3@)mail.com' , 33333333, ['book']);
let Client4= new Client(4, 'anna', 'moka', 'some4@)mail.com' , 44444444, ['mobile', 'book', 'poster','mouse', 'keyboard','monitor']);
let Client5= new Client(5, 'nina', 'kar', 'some5@)mail.com' , 55555555, ['mobile', 'book', 'mouse', 'keyboard']);
let Client6= new Client(6, 'olga', 'pas', 'some6@)mail.com' , 66666666, ['mobile', 'book','mouse']);
let Client7= new Client(7, 'dima', 'miron', 'some7@)mail.com' , 77777777, ['mobile', 'book','mouse']);
let Client8= new Client(8, 'nikolas', 'claus', 'some8@)mail.com' , 88888888, ['mobile', 'book']);
let Client9= new Client(9, 'lina', 'kama', 'some9@)mail.com' , 99999999, ['mobile']);
let Client10= new Client(10, 'fedir', 'chik', 'some10@)mail.com' , 1010101010, ['mobile', 'book','mouse','mouse', 'keyboard']);

let clients=[];
clients.push(Client1,Client2,Client3,Client4,Client5,Client6,Client7,Client8,Client9,Client10)
console.log(clients)

// + Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 let sortClients= clients.sort(function(cl1,cl2){
     return cl1.order.length-cl2.order.length
 })
console.log(sortClients)

// + Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// + drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// + info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// + increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// + changeYear (newValue) - змінює рік випуску на значення newValue
// + addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year,speed, engine){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.speed=speed;
    this.engine=engine;
    this.driver= [];
    this.drive= function (){
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    }
    this.info= function (){
        console.log(`model- ${this.model}, manufacturer- ${this.manufacturer},year-${this.year},speed- ${this.speed}, engine-${this.engine}`)
    }
    this.increaseMaxSpeed= function (newSpeed){
        this.speed=newSpeed
    }
    this.changeYear=function(newValue){
        (this.year=newValue)
    }
    this.addDriver=(function (driver){
        this.driver.push(driver)
    })
}


let car1=new Car('bmw', 'Germany', 2023, 200, 'N74')
console.log(car1)
car1.info()
car1.drive()
car1.increaseMaxSpeed(260)
car1.info()
car1.changeYear(1900)
car1.info()
car1.addDriver({name: 'John Doe'})
console.log(car1)


// + (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// + drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// + info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// + increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// + changeYear (newValue) - змінює рік випуску на значення newValue
// + addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car2{

    constructor(model, manufacturer, year,speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
        this.driver=[]
        this.drive2=function (){
            console.log(`їдемо зі швидкістю ${this.speed} на годину`)
        }
        this.info2=function (){
            console.log(`model- ${this.model},manufacturer-${this.manufacturer} ,year- ${this.year} ,speed-${this.speed}, engine- ${this.engine}`)
        }
        this.increaseMaxSpeed2=function (newSpeed){
            this.speed=newSpeed
        }
        this.changeYear2=function (newValue){
            this.year=newValue
        }
        this.addDriver2=function (driver){
            this.driver.push(driver)
        }
    }

}
let car2=new Car2('cadillac', 'usa', 2015, 160, 'v8')
car2.drive2()
car2.info2()
car2.increaseMaxSpeed2(350)
car2.info2()
car2.changeYear2(2022)
car2.info2()
car2.addDriver2({name: 'roman', age:38})
console.log(car2)



// +створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//+ Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//  +   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//  +  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age,size){
    this.name=name;
    this.age=age;
    this.size=size;
}
let girl1=new Cinderella('Cinderella1', 22, 35)
let girl2=new Cinderella('Cinderella2', 25, 35)
let girl3=new Cinderella('Cinderella3', 20, 34)
let girl4=new Cinderella('Cinderella4', 30, 38)
let girl5=new Cinderella('Cinderella5', 45, 39)
let girl6=new Cinderella('Cinderella6', 18, 40)
let girl7=new Cinderella('Cinderella7', 65, 36)
let girl8=new Cinderella('Cinderella8', 31, 39)
let girl9=new Cinderella('Cinderella9', 23, 37)
let girl10=new Cinderella('Cinderella10', 42, 38)

let cinderellas=[];
cinderellas.push(girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10)
console.log(cinderellas)

class Prince {
    constructor(name, age,sizeCinderella) {
    this.name=name;
    this.age=age;
    this.sizeCinderella=sizeCinderella;
    this.findCinderella = function (girls) {
        for (let i = 0; i < girls.length; i++) {
            if (girls[i].size === this.sizeCinderella) {
                console.log(`${girls[i].name} is really Cinderella`)
                return girls[i];
            }
        }
        console.log('Cinderella not here')
    }
    this.findCinderella2= function (){
        let rez=cinderellas.find(cinderella=> cinderella.size === this.sizeCinderella)
            return  rez
    }

    }

}
 let prince= new Prince('Viliam', 28, 36)
prince.findCinderella(cinderellas)
console.log(prince.findCinderella2(cinderellas));
