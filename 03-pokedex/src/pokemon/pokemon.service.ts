import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();

    const pokemonFind = await this.pokemonModel.findOne({
      name: createPokemonDto.name,
    });
    if (pokemonFind)
      throw new BadRequestException({
        message: `Pokemon exists in db ${JSON.stringify(pokemonFind)}`,
        code: 'ERR_POKEMON_ALREADY_EXISTS',
      });

    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException({
          message: `Pokemon exists in db ${JSON.stringify(error.keyValue)}`,
          code: 'ERR_POKEMON_ALREADY_EXISTS',
        });
      }
      console.log(error);
      throw new InternalServerErrorException(
        `Can't create Pokemon - Check server logs`,
      );
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
