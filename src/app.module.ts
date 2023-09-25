import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YModule } from './y/y.module';
import { ViagemModule } from './viagem/viagem.module';
import { DestinoModule } from './destino/destino.module';

@Module({
  imports: [YModule, ViagemModule, DestinoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
