import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

//se definen las rutas del api rest
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    //GET -> OBTENER
    //POST -> CREAR
    //PUT, PATCH -> ACTUALIZAR
    //DELETE -> BORRAR

    @Post() //http://localhost/users -> POST
    create(@Body() user: CreateUserDto) {
        return this.usersService.create(user)
    }

}
