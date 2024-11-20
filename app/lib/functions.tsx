'use server';
import prisma from '../prisma';

export async function getImages() {
  const images = await prisma.images.findMany();
  return images;
}

export async function getDiaImages() {
  const diaImages = await prisma.eventDiaDeLosMuertos.findMany();
  return diaImages;
}
