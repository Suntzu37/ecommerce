import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { User } from '@/users/users.model'

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => User)
    public async register(
        @Args('name') name: string,
        @Args('email') email: string,
        @Args('password') password: string
    ): Promise<User> {
        return await this.authService.register(name, email, password)
    }
}
