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

export async function getBeerRunImages() {
  const beerImages = await prisma.eventBeerRun.findMany();
  return beerImages;
}
export async function getPastEvents() {
  try {
    const pastevents = await prisma.pastEvents.findMany();
    return pastevents;
  } catch (error) {
    console.error('Error fetching past events:', error);
    throw error;
  }
}

export async function getFutureEvents() {
  try {
    const futurevents = await prisma.futureEvents.findMany();
    return futurevents;
  } catch (error) {
    console.error('Error fetching future events:', error);
    throw error;
  }
}
