import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  //create new account
  async signup(dto: SignUpDto) {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          pseudonyme: dto.username,
          username: dto.username,
          email: dto.email,
          hash,
        },
        select: {
          hash: false,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }

      throw error;
    }
  }

  //logging in
  async signin(dto: SignUpDto) {
    this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
  }
}
