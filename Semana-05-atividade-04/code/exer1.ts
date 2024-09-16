interface Person {
    name: string;
    lastName: string;
    age: number;
    isOlderThanEighteen: boolean;
    favoriteFoods: string[];
  }
  
  class Properties implements Person {
      public fullName!: string;
  
      constructor(public name: string, public lastName: string, public age: number, public isOlderThanEighteen: boolean, public favoriteFoods: string[]) {}
  
      setFullName(){
          this.fullName = `${this.name} ${this.lastName}`;
      }
      showUserData(){
          console.log(`Meu nome é: ${this.fullName} tenho ${this.age} e gosto de comer: ${this.favoriteFoods}.`)
      }
  }
  
  const person = new Properties('Benjamin', 'Parker', 21, true, ['Macarrão', ' Lasanha', ' Pizza'])
  
  person.setFullName()
  person.showUserData()