const personPrototype = {
  firstName: 'Luis',
  lastName: 'Henrique',
  age: 25,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Maria';
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
