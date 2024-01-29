import { ApiProperty } from '@nestjs/swagger';

export class CreateEnrollmentDto {
  @ApiProperty({ type: 'number', description: 'Student ID' })
  studentId: number;

  @ApiProperty({ type: 'number', description: 'Course ID' })
  courseId: number;

  constructor(studentId: number, courseId: number) {
    this.studentId = studentId;
    this.courseId = courseId;
  
  }
}
