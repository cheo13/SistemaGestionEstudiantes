import { Controller, Get, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAllStudents() {
    return this.studentService.findAllStudents();
  }

  @Get(':id')
  findOneStudent(@Param('id') id: string) {
    return this.studentService.findOneStudent(+id);
  }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }

  @Patch(':id')
  patchStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.patchStudent(+id, updateStudentDto);
  }

  @Put(':id') 
  putStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.putStudent(+id, updateStudentDto);
  }

  @Delete(':id')
  removeStudent(@Param('id') id: string) {
    return this.studentService.removeStudent(+id);
  }
}
