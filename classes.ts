class UserAccount {
  protected name: string;
  protected age: number

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`)
  }
}

const gabe = new UserAccount('gabe', 24)
console.log(gabe)
// console.log(gabe.age)

gabe.logDetails()

class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;

  constructor(name: string, age: number,nickname: string, level: number){
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  set setLevel(level: number){
    this.level = level
  }
  get getLevel(){
    return this.level
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} has the char ${this.nickname} at level ${this.level}`
    );
  }
}

const john = new CharAccount('John', 20, 'johnmaster', 80)
console.log(john)

john.setLevel = 499
console.log(john.getLevel)

john.logDetails()
john.logCharDetails()