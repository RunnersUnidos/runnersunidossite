import { NextResponse } from 'next/server';
import prisma from '../../../prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const totalMiles = await prisma.miles.aggregate({
    _sum: {
      miles: true
    }
  });

  return NextResponse.json(
    { totalMiles: totalMiles._sum.miles || 0 },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    }
  );
} 