import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignUpDto) {
    return this.service.signup(dto);
  }

  @Post('signin')
  async signin(@Body() dto: AuthDto) {
    return this.service.signin(dto);
  }
}
