"use strict";
class Properties {
    constructor(name, lastName, age, isOlderThanEighteen, favoriteFoods) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen = isOlderThanEighteen;
        this.favoriteFoods = favoriteFoods;
    }
    setFullName() {
        this.fullName = `${this.name} ${this.lastName}`;
    }
    showUserData() {
        console.log(`Meu nome é: ${this.fullName} tenho ${this.age} e gosto de comer: ${this.favoriteFoods}.`);
    }
}
const person = new Properties('Benjamin', 'Parker', 21, true, ['Macarrão', ' Lasanha', ' Pizza']);
person.setFullName();
person.showUserData();
