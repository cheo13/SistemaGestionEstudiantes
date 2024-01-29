import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(private prismaService: PrismaService) {}

  async createStudent(createStudentDto: CreateStudentDto) {
    return this.prismaService.student.create({
      data: createStudentDto,
    });
  }

  async findAllStudents() {
    return this.prismaService.student.findMany();
  }

  async findOneStudent(id: number) {
    const student = await this.prismaService.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return student;
  }

  async patchStudent(id: number, updateStudentDto: UpdateStudentDto) {
    const existingStudent = await this.prismaService.student.findUnique({
      where: { id },
    });

    if (!existingStudent) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return this.prismaService.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }


  async putStudent(id: number, updateStudentDto: UpdateStudentDto) {
    const existingStudent = await this.prismaService.student.findUnique({
      where: { id },
    });

    if (!existingStudent) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return this.prismaService.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }




  async removeStudent(id: number) {
    const existingStudent = await this.prismaService.student.findUnique({
      where: { id },
    });

    if (!existingStudent) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return this.prismaService.student.delete({
      where: { id },
    });
  }
}
