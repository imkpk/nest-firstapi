import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interface/car.interface';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  [x: string]: any;

  /* private cars = CARS;
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
  } */

  constructor(@InjectModel('car') private readonly carModel: Model<ICar>) {}

  public async getCars() {
    // const carId=Number(id)
    const cars = await this.carModel.find().exec();
    if (!cars || !cars[0]) {
      throw new HttpException('Not Found', 404);
    }
    return cars;
  }
  public async postCar(newcar: CarDto) {
    const cars = await new this.carModel(newcar);
    return cars.save();
  }
  public async getCarById(id) {
    const carId = await this.carModel.findOne({ id }).exec();
    if (!carId) {
      throw new HttpException('Not Found ', 404);
    }
    return carId;
  }
  public async deleteCarById(id) {
    const carId = await this.carModel.findOne({ id }).exec();
    if (!carId) {
      throw new HttpException('Not Found ', 404);
    }
    return carId;
  }
  public async putCarById(id, propertyName, propertyValue) {
    const carId = await this.carModel
      .findOneAndUpdate({ id }, { [propertyName]: [propertyValue] })
      .exec();
    if (!carId) {
      throw new HttpException('Not Found ', 404);
    }
    return carId;
  }
}
