import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Vadim' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'vadim123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'vadim@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
