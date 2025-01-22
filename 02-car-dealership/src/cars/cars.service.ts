import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    // if (id > this.cars.length) {
    //   throw new NotFoundException({
    //     message: 'Car not found',
    //     code: 'ERR_CAR_NOT_FOUND',
    //   });
    // } else if (id <= 0) {
    //   throw new BadRequestException({
    //     message: 'Invalid car ID',
    //     code: 'ERR_INVALID_ID',
    //   });
    // }

    // return this.cars[--id];

    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException({
        message: `Car with ID ${id} not found`,
        code: 'ERR_CAR_NOT_FOUND',
      });
    }

    return car;
  }
}
