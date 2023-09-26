import { DataSource } from 'typeorm';
import { viagem } from './viagem.entity';

export const ViagemProviders = [
  {
    provide: 'VIAGEM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(viagem),
    inject: ['DATA_SOURCE'],
  },
];