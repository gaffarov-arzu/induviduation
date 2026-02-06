import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// TODO: əsl auth-dan istifadə et. Hələlik stub user-id.
const MOCK_USER_ID = 'demo-user-id';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { mood, energy, lightAspect, shadowAspect, trigger, reflection } = body;

  // Database hələ qurulmayıbsa, Prisma əvəzinə sadə mock cavab qaytar
  if (!process.env.DATABASE_URL) {
    const entry = {
      id: 'mock-id',
      userId: MOCK_USER_ID,
      date: today,
      mood,
      energy,
      lightAspect,
      shadowAspect,
      trigger,
      reflection,
      createdAt: today,
    };
    return NextResponse.json({ entry });
  }

  const existing = await prisma.dailyEntry.findFirst({
    where: {
      userId: MOCK_USER_ID,
      date: {
        gte: today,
        lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
      },
    },
  });

  const data = {
    userId: MOCK_USER_ID,
    date: today,
    mood,
    energy,
    lightAspect,
    shadowAspect,
    trigger,
    reflection,
  };

  const entry = existing
    ? await prisma.dailyEntry.update({
        where: { id: existing.id },
        data,
      })
    : await prisma.dailyEntry.create({ data });

  return NextResponse.json({ entry });
}

