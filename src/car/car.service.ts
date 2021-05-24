import { HttpException, Injectable } from '@nestjs/common';
// import { resolve } from 'path';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;

  // route functions
  public async getCars() {
    return this.cars;
  }
  // post cars
  public async postCar(car) {
    return this.cars.push(car);
  }
  //get car by id
  public async getCarbyId(id: number) {
    const carId = Number(id);
    const car = this.cars.find((car) => car.id === carId);
    if (!car) {
      throw new HttpException('not found', 404);
    }
    return car;
  }
  // Delete car by Id
  public async deleteCarById(id: number) {
    const carId = Number(id);
    const carIndex = this.cars.findIndex((car) => car.id === carId);
    if (carIndex === -1) {
      throw new HttpException('not found', 404);
    }
    this.cars.splice(carIndex, 1);
    return this.cars;
  }
  // Put car by ID
  public async putCarById(
    id: number,
    propertyName: string,
    propertyValue: string,
  ) {
    const carId = Number(id);
    const carIndex = this.cars.findIndex((car) => car.id === carId);
    if (carIndex === -1) {
      throw new HttpException('not found', 404);
    }
    this.cars[carIndex][propertyName] = propertyValue;
    return this.cars;
  }
}
