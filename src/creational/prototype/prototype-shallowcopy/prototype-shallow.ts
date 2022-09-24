export interface Prototype {
    clone(): Prototype;
}

export class Address {
    constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {}

    clone(): this {
        const newObj = Object.create(this);

        return newObj;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

const address1 = new Address('Av Brasil', 15);

const person1 = new Person('Luiz', 30);
person1.addAddress(address1);

person1.addresses[0].street = 'Rua Oito';

const person2 = person1.clone();

person2.name = 'Kevem';
console.log(person2);
console.log(person2.addresses);
