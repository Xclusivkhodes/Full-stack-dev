let itemName: string = "Bag";
let itemPrice: number = 50;
let isAvailable: boolean = true;
let storeInventory: string[] = ["Bag", "Shoes", "Watch"];
let priceTag: [string, number] = ["USD", 300];

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

let myBag: Product = {
  name: "Balenciaga",
  price: 700,
  inStock: true,
};

interface User {
  username: string;
  id: number;
  email?: string;
  isAdmin: boolean;
}

let currentUser: User = {
  username: "Felix Gbewonyo",
  id: 2233,
  isAdmin: true,
};

function greetUser(name: string): string {
  return `Hello ${name}`;
}

greetUser(currentUser.username);

function applyDiscount(price: number): number {
  return price - 10;
}

function err(message: string): void {
  console.log(message);
}

let result: string | number;
result = "hello";

let playBackStatus: "playing" | "paused" | "stopped";
playBackStatus = "playing";

type Price = number | "free";
let bagPrice: Price = 29;

function getLastItem<T>(list: T[]): T {
  return list[list.length - 1];
}

getLastItem([1, 2, 3, 4]);

function getFirstItem(list: any[]): any {
  return list[0];
}

//Classes
class Car {
  make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  drive(): void {
    console.log(`The ${this.make} does not go vroom it goes ...`);
  }
}

let myCar = new Car("Tesla", 3027);

class SmartPhone {
  brand: string;
  batteryLife: number;
  readonly serialNumber: string = "wqJ,QWS2181271272AKJ";

  constructor(brand: string, batteryLife: number) {
    this.brand = brand;
    this.batteryLife = batteryLife;
  }

  useApp(): void {
    console.log("Opening app");
  }
}

let myPhone = new SmartPhone("Samsung", 14);
myPhone.useApp();

class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }
}

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Generic Sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}

class Staff {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  work(): void {
    console.log("Working");
  }
}

class Manager extends Staff {
  department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  manage(): void {
    console.log("Managing team...");
  }
}

const manager = new Manager("Gbewonyo", "IT");
manager.work();

abstract class Shape {
  abstract getArea(): number;
}

class Square extends Shape {
  side: number;
  constructor(side: number) {
    super();
    this.side = side;
  }

  getArea(): number {
    return this.side * this.side;
  }
}

abstract class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getSalary(): number;
}

class FullTimeEmployee extends Employee {
  monthlyRate: number;
  constructor(name: string, monthlyRate: number) {
    super(name);
    this.monthlyRate = monthlyRate;
  }
  getSalary(): number {
    return this.monthlyRate;
  }
}
