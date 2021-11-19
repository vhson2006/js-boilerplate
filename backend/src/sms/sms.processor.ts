import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import * as AWS from 'aws-sdk';

@Processor('adc_sms')
export class SmsProcessor {
  private readonly logger = new Logger(SmsProcessor.name);
  
  @Process('adc_sms')
  async handleRegister(job: Job) {
    try {
      const { data } = job;
      this.logger.debug(`Start send sms: ${JSON.stringify(data)}`);

      const smsPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish({
        Message: data.message,
        PhoneNumber: '+' + data.phone,
        MessageAttributes: {
          'AWS.SNS.SMS.SenderID': {
            'DataType': 'String',
            'StringValue': 'ADC'
          }
        }
      }).promise();
      smsPromise.then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })

      this.logger.debug(`Send sms completed: ${JSON.stringify(data)}`);
    } catch(err) {
      this.logger.debug(`Send sms error: ${JSON.stringify(err)}`);
    }
  }
}
