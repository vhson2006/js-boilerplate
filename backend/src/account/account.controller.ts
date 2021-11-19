import { Body, Controller, Request, Get, Patch, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { UpdateAccountDto } from './dto/update-account-dto';
import { Public } from 'src/common/decorators/public.decorator';
import { INCORRECT, CORRECT } from 'src/config/app.constant';
import { tranformAccount } from './account.transformer';

@ApiTags('account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async detail(@Request() req) {
    const account = await this.accountService.detail(req.user.id);
    if (account === INCORRECT) {
      return {
        status: INCORRECT,
        messeage: 'Account is invalid'
      }
    }
    return {
      status: CORRECT,
      data: tranformAccount(account)
    }
  }

  @Patch()
  async update(@Request() req, @Body() updateAccountDto: UpdateAccountDto) {
    const response = await this.accountService.update(req.user.id, updateAccountDto);
    if (response === INCORRECT) {
      return {
        status: INCORRECT,
        messeage: 'Update error'
      }
    }

    return {
      status: CORRECT,
      data: []
    }
  }

  @Get(':code')
  @Public()
  async checkCode(@Param() params) {
    const { code } = params;
    const response = await this.accountService.checkCode(code);
    if (response === INCORRECT) {
      return {
        status: INCORRECT,
        messeage: 'Code is invalid'
      }
    }

    return {
      status: response,
      data: []
    }
  }
}


