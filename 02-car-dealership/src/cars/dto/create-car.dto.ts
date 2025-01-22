import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand must be a string' })
  @IsNotEmpty({ message: 'Brand is required' })
  readonly brand: string;

  @IsString({ message: 'Model must be a string' })
  @IsNotEmpty({ message: 'Model is required' })
  @MinLength(3, { message: 'Model is too short' })
  readonly model: string;
}
