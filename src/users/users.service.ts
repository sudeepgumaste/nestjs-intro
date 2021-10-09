import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 0,
      name: 'Gaara',
    },
    {
      id: 1,
      name: 'Naruto',
    },
    {
      id: 2,
      name: 'Gaara',
    },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {
      id: this.users.length,
      ...createUserDto,
    };
    this.users = [...this.users, newUser];
    return newUser;
  }
}
