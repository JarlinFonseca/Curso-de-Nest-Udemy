import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'Honda', model: 'Civic' },
    { id: 3, brand: 'Jeep', model: 'Cherokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
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
        message: 'Car not found',
        code: 'ERR_CAR_NOT_FOUND',
      });
    }

    return car;
  }
}
