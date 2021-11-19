import { Body, Controller, Request, Patch, Post, Get, Query, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { RedeemService } from './redeem.service';
import { InviteDto } from './dto/invite.dto';
import { ClaimDto } from './dto/claim.dto';
import { CORRECT, INCORRECT } from 'src/config/app.constant';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { UpdateRedeemDto } from './dto/update-redeem.dto';

@ApiTags('redeem')
@Controller('redeem')
export class RedeemController {
  constructor(private readonly redeemService: RedeemService) {}

  @Get()
  async getRedeems(@Request() req, @Query() query: PaginationQueryDto) {
    const response = await this.redeemService.getList(req.user.id, query);
    return {
      status: CORRECT,
      data: response,
    }
  }

  @Patch(':id')
  async updateRedeem(@Request() req, @Param('id') id: string, @Body() updateRedeemDto: UpdateRedeemDto) {
    const response = await this.redeemService.updateRedeem(req.user.id, id, updateRedeemDto);
    if (response === INCORRECT) {
      return {
        status: INCORRECT,
        message: "Can't update redeem"
      }
    }
    return {
      status: CORRECT,
      data: [],
    }
  }

  @Delete(':id')
  async deleteRedeem(@Request() req, @Param('id') id: string) {
    const response = await this.redeemService.deleteRedeem(req.user.id, id);
    if (response === INCORRECT) {
      return {
        status: INCORRECT,
        message: "Can't delete redeem"
      }
    }
    return {
      status: CORRECT,
      data: [],
    }
  }

  @Public()
  @Post('invite')
  async invite(@Body() inviteDto: InviteDto) {
    const response = await this.redeemService.invite(inviteDto);
    if (response === INCORRECT) {
      return {
        status: INCORRECT,
        message: 'Something wrong'
      }
    }

    return {
      status: CORRECT
    }
  }

  @Patch('claim')
  async claim(@Request() req, @Body() claimDto: ClaimDto) {
    const response = await this.redeemService.claim(req.user.id, claimDto);
    if (response === INCORRECT) {
      return {
        status: INCORRECT,
        message: 'Inforamtion is invalid'
      }
    }

    return {
      status: response
    }
  }
}
