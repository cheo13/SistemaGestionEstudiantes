import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Create two dummy students
  const student1 = await prisma.student.upsert({
    where: { email: 'student1@example.com' },
    update: {},
    create: {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: new Date('2000-01-01'),
      address: '123 Main St',
      email: 'student1@example.com',
    },
  });

  const student2 = await prisma.student.upsert({
    where: { email: 'student2@example.com' },
    update: {},
    create: {
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: new Date('1998-05-15'),
      address: '456 Oak St',
      email: 'student2@example.com',
    },
  });

  // Create two dummy courses
  const course1 = await prisma.course.upsert({
    where: { name: 'Biology' },
    update: {},
    create: {
      name: 'Biology',
      description: 'Study of living organisms and their interactions with each other and their environments.',
    },
  });

  const course2 = await prisma.course.upsert({
    where: { name: 'Mathematics' },
    update: {},
    create: {
      name: 'Mathematics',
      description: 'Study of numbers, quantities, shapes, patterns, and their relationships.',
    },
  });

 
}

// Execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close Prisma Client at the end
    await prisma.$disconnect();
  });
