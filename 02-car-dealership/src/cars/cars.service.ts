import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

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
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException({
        message: `Car with ID ${id} not found`,
        code: 'ERR_CAR_NOT_FOUND',
      });
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };

    if (
      this.cars.find(
        (car) => car.brand === newCar.brand && car.model === newCar.model,
      )
    ) {
      throw new NotFoundException({
        message: `Car with brand ${newCar.brand} and model ${newCar.model} already exists`,
        code: 'ERR_CAR_ALREADY_EXISTS',
      });
    }

    this.cars.push(newCar);
    return newCar;
  }

  updated(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new NotFoundException({
        message: `Car id is not valid inside body`,
        code: 'ERR_ID_MISMATCH',
      });
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...car,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findOneById(id);

    //Borrar el car de la lista
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
