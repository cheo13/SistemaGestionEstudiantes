import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllEnrollments() {
    return this.prisma.enrollment.findMany();
  }

  async getEnrollmentById(enrollmentId: number){
    const enrollment = await this.prisma.enrollment.findUnique({
      where: { id: enrollmentId },
    });

    if (!enrollment) {
      throw new NotFoundException(`Enrollment with ID ${enrollmentId} not found`);
    }

    return enrollment;
  }

  async createEnrollment(createEnrollmentDto: CreateEnrollmentDto) {
    const enrollment = await this.prisma.enrollment.create({
      data: createEnrollmentDto,
    });

    return enrollment;
  }

  async updateEnrollment(enrollmentId: number, updateEnrollmentDto: UpdateEnrollmentDto){
    const enrollment = await this.getEnrollmentById(enrollmentId);

    const updatedEnrollment = await this.prisma.enrollment.update({
      where: { id: enrollmentId },
      data: updateEnrollmentDto,
    });

    return updatedEnrollment;
  }

  async replaceEnrollment(enrollmentId: number, createEnrollmentDto: CreateEnrollmentDto){
    await this.getEnrollmentById(enrollmentId);

    const replacedEnrollment = await this.prisma.enrollment.update({
      where: { id: enrollmentId },
      data: createEnrollmentDto,
    });

    return replacedEnrollment;
  }

  async deleteEnrollment(enrollmentId: number): Promise<void> {
    await this.getEnrollmentById(enrollmentId);

    await this.prisma.enrollment.delete({
      where: { id: enrollmentId },
    });
  }
}
