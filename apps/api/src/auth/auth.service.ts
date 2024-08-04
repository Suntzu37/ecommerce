import { Injectable } from '@nestjs/common'
import { UsersService } from '@/users/users.service'
import { type User } from '@/users/users.model'

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    public async register(
        name: string,
        email: string,
        password: string
    ): Promise<User> {
        return await this.usersService.create(name, email, password)
    }
}
