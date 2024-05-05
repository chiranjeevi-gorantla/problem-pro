import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { createProblemSchema } from '../../validationSchemas';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createProblemSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

  const newProblem = await prisma.problem.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newProblem, {
    status: 201,
  });
}
