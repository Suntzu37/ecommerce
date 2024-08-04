import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { type User } from './users.model'

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}

    public async getAll(): Promise<User[]> {
        return await this.prismaService.user.findMany()
    }

    public async create(
        name: string,
        email: string,
        password: string
    ): Promise<User> {
        return await this.prismaService.user.create({
            data: {
                name,
                email,
                password
            }
        })
    }
}
