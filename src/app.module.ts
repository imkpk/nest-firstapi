import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CarModule,
    MongooseModule.forRoot(
      'mongodb+srv://imkpk:Justin@@18918@cluster0.l8ume.mongodb.net/myFirstDb?retryWrites=true&w=majority',
    ),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
