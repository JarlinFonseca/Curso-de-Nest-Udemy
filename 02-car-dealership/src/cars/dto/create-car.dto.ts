import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand must be a string' })
  @IsNotEmpty({ message: 'Brand is required' })
  readonly brand: string;

  @IsString({ message: 'Model must be a string' })
  @IsNotEmpty({ message: 'Model is required' })
  readonly model: string;
}
