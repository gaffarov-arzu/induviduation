import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// TODO: əsl auth-dan istifadə et. Hələlik stub user-id.
const MOCK_USER_ID = 'demo-user-id';

export async function GET() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const entry = await prisma.dailyEntry.findFirst({
    where: {
      userId: MOCK_USER_ID,
      date: {
        gte: today,
        lt: tomorrow,
      },
    },
  });

  return NextResponse.json({ entry });
}

