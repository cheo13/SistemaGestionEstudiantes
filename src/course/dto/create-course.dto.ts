import { ApiProperty } from "@nestjs/swagger";
export class CreateCourseDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string;


}