import { NextResponse } from 'next/server';
import prisma from '../../../prisma';

export async function GET() {
  const totalMiles = await prisma.miles.aggregate({
    _sum: {
      miles: true
    }
  });

  return NextResponse.json({ totalMiles: totalMiles._sum.miles || 0 });
} 