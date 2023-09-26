import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Viagem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    nome: string;

    @Column()
    dataSaida: Date; 
    
    @Column()
    dataChegada: Date;
    
    @Column()
    valor: number; 
}
