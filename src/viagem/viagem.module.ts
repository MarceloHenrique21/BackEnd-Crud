import { Module } from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { ViagemController } from './viagem.controller';
import { DatabaseModule } from '../database/database.module';
import { viagemProviders } from './photo.providers';
import { PhotoService } from './photo.service';


@Module({ 
  imports: [DatabaseModule],
  controllers: [ViagemController],
  providers: [
    
    ...viagemProviders,
    ViagemService
  ],
})
export class ViagemModule {}

