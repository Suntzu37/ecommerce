import { Resolver, Query } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './users.model'

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => [User])
    public async users(): Promise<User[]> {
        return await this.usersService.getAll()
    }
}
