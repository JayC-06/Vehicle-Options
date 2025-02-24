// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle{
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
 

  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor (
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
  
  if (wheels.length !== 2){
    this.wheels = [];
  }
}
wheelie(): void {
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
}

override printDetails(): void {
super.printDetails();
console.log(`VIN: ${this.vin}`);
console.log(`Make: ${this.make}`);
console.log(`Model: ${this.model}`);
console.log(`Year: ${this.year}`);
console.log(`Weight: ${this.weight} lbs`);
console.log(`Top Speed: ${this.topSpeed} mph`);
console.log(`Color: ${this.color}`);
console.log(`Wheels: ${this.wheels.length}`);
}
};

export default Motorbike;
