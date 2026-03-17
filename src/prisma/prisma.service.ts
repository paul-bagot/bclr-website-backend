import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { env } from 'prisma/config';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: env("DATABASE_URL")
                }
            }
        });
    }
}
