import { Controller, Get, Param, Post, Body, Patch, Put, Delete } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  async getAllEnrollments() {
    return this.enrollmentService.getAllEnrollments();
  }

  @Get(':id')
  async getEnrollmentById(@Param('id') enrollmentId: number) {
    return this.enrollmentService.getEnrollmentById(enrollmentId);
  }

  @Post()
  async createEnrollment(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.createEnrollment(createEnrollmentDto);
  }

  @Patch(':id')
  async updateEnrollment(@Param('id') enrollmentId: number, @Body() updateEnrollmentDto: UpdateEnrollmentDto) {
    return this.enrollmentService.updateEnrollment(enrollmentId, updateEnrollmentDto);
  }

  @Put(':id')
  async replaceEnrollment(@Param('id') enrollmentId: number, @Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.replaceEnrollment(enrollmentId, createEnrollmentDto);
  }

  @Delete(':id')
  async deleteEnrollment(@Param('id') enrollmentId: number) {
    return this.enrollmentService.deleteEnrollment(enrollmentId);
  }
}

