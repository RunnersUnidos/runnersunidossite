import { NextResponse } from 'next/server';
import prisma from '../../prisma'

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req: Request) {
  const { name, miles } = await req.json();

  if (!name || !miles) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const entry = await prisma.miles.create({
    data: {
      name,
      miles: parseFloat(miles),
    },
  });

  console.log("miles submit", entry)
  return NextResponse.json(entry, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}

export async function GET() {
  const entries = await prisma.miles.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return NextResponse.json(entries, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
