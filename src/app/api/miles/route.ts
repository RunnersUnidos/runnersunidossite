import { NextResponse } from 'next/server';
import prisma from '../../prisma'

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
  return NextResponse.json(entry);
}





export async function GET() {
    const entries = await prisma.miles.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
  
    return NextResponse.json(entries);
  }
