import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

//se definen las rutas del api rest
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    //GET -> OBTENER
    //POST -> CREAR
    //PUT, PATCH -> ACTUALIZAR
    //DELETE -> BORRAR

    @UseGuards(JwtAuthGuard)
    @Get() //http://localhost/users -> GET
    findAll() {
        return this.usersService.findAll()
    }

    @Post() //http://localhost/users -> POST
    create(@Body() user: CreateUserDto) {
        return this.usersService.create(user)
    }
    
}
