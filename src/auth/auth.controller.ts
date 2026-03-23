import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    return this.service.signup(dto);
  }

  @Post('signin')
  async signin(@Body() dto: SigninDto) {
    return this.service.signin(dto);
  }
}
