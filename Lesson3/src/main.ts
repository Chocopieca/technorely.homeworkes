class Users {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const user = new Users("Вася", 25);

console.log(user);