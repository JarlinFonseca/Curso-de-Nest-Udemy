import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep'];
  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: number) {
    if (id > this.cars.length) {
      throw new NotFoundException({
        message: 'Car not found',
        code: 'ERR_CAR_NOT_FOUND',
      });
    } else if (id <= 0) {
      throw new BadRequestException({
        message: 'Invalid car ID',
        code: 'ERR_INVALID_ID',
      });
    }

    return this.cars[--id];
  }
}
