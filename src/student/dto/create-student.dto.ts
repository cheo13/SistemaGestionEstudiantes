import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  address: string;

  @ApiProperty()
  email: string;
}
