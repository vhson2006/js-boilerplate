import { Module } from '@nestjs/common';
import { RedeemController } from './redeem.controller';
import { RedeemService } from './redeem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/entities/account.entity';
import { CryptoService } from 'src/crypto/crypto.service';
import { Redeem } from 'src/entities/redeem.entity';
import { BullModule } from '@nestjs/bull';
import { SmsService } from 'src/sms/sms.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, Redeem]),
    BullModule.registerQueue({
      name: 'adc_sms',
    })
  ],
  controllers: [RedeemController],
  providers: [RedeemService, CryptoService, SmsService],
  exports: [RedeemService],
})
export class RedeemModule {}
