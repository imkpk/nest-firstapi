import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
// import { query } from 'express';
import { CarDto } from './car.dto';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private carServe: CarService) {}
  @Get()
  async getCars() {
    return this.carServe.getCars();
  }

  @Post()
  public async postCars(@Body() car: CarDto) {
    return this.carServe.postCar(car);
  }

  @Get(':id')
  public async getcarByID(@Param('id') id: number) {
    return this.carServe.getCarById(id);
  }

  @Delete(':id')
  public async deleteCarById(@Param('id') id: number) {
    this.carServe.deleteCarById(id);
  }
  @Put(':id')
  public async putCarById(@Param('id') id: number, @Query() query) {
    const propertyName = await query.pname;
    const propertyValue = await query.pvalue;
    this.carServe.putCarById(id, propertyName, propertyValue);
  }
}
