// course.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private prismaService: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    return this.prismaService.course.create({
      data: {
        name: createCourseDto.name,
        description: createCourseDto.description,
        
      },
    });
  }
  

  async findAll() {
    return this.prismaService.course.findMany();
  }

  async findOne(id: number) {
    const course = await this.prismaService.course.findUnique({
      where: { id },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const existingCourse = await this.prismaService.course.findUnique({
      where: { id },
    });

    if (!existingCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return this.prismaService.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  async patch(id: number, updateCourseDto: UpdateCourseDto) {
    const existingCourse = await this.prismaService.course.findUnique({
      where: { id },
    });

    if (!existingCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return this.prismaService.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  async remove(id: number) {
    const existingCourse = await this.prismaService.course.findUnique({
      where: { id },
    });

    if (!existingCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return this.prismaService.course.delete({
      where: { id },
    });
  }
}
