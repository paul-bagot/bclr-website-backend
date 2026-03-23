import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SigninDto, SignupDto } from './dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  //create new account
  async signup(dto: SignupDto) {

    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          pseudonyme: dto.username.trim(),
          username: dto.username.trim().toLowerCase(),
          email: dto.email.trim().toLowerCase(),
          hash,
        },
        select: {
          pseudonyme: true,
          username: true,
          email: true,
          description: true,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if(error.code === "P2002") {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: SigninDto) {

    const identifier = dto.identifier.trim().toLowerCase();
    const isEmail = this.isEmail(identifier);

    const user = isEmail
      ? await this.findByEmail(identifier)
      : await this.findByUsername(identifier);

    if(!user) {
      throw new ForbiddenException('Credentials incorrect');
    }

    const passwordVerified = await argon.verify(user.hash, dto.password);
    if(!passwordVerified) {
      throw new ForbiddenException('Credentials incorrect');
    }

    return user;
  }

  private isEmail(value: string): boolean {
    return /\S+@\S+\.\S+/.test(value);
  }

  private async findByEmail(email : string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  private async findByUsername(username : string) {
    return await this.prisma.user.findUnique({ where: { username } });
  }

}
