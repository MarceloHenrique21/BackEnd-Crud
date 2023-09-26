import {IsString} from 'class-validator'

export class CreateViagemDto {
  
  @IsString
  nome: string;

  dataSaida: Date; 
  
  dataChegada: Date;
  
  valor: number; 
}
