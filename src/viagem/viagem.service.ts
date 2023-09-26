import { Injectable } from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import {viagem} from './entities/viagem.entity'
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';


@Injectable()
export class ViagemService {

  private viagem: viagem[] = [];

  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  create(createViagemDto: CreateViagemDto) {

    const currentMaxId = this.viagem[this.viagem.length - 1]?.id || 0;
    
    const id = currentMaxId + 1;

    const viagem = {
      id,
      ...createViagemDto,
    };

    this.viagem.push(viagem);

    return viagem;
  }

  findAll() {
    return this.viagem;
  }

  async findAll(): Promise<Viagem[]> {
    return this.Viagem Repository.find();
  }

  findOne(id: number) {

    const index = this.viagem.findIndex(viagem => user.id === id);

    return return this.viagem[index];
  }

  update(id: number, updateViagemDto: UpdateViagemDto) {

    const viagem = this.findOne(id)

    const newViagem = {
      ...viagem,
      ...updateViagemDto,
    }

    this.viagem[index] = newViagem;

    return newViagem;
  }

  remove(id: number) {

    const index = this.viagem.findIndex(viagem => user.id === id);

    this.viagem.splice(index, 1);

    return;
  }
}
