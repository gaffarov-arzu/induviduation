# 100% Mən – Shadow & Light Journey

Özünü tanımaq üçün, aydın və kölgə tərəflərini addım-addım kəşf etdiyin web application skeleti.

## Texnoloji stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS
- PostgreSQL + Prisma ORM

## Qurulum

1. Asılılıqları quraşdır:

```bash
npm install
```

2. `.env` faylı yarat və `DATABASE_URL` əlavə et:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/shadow_light"
```

3. Prisma sxemini migrasiya et:

```bash
npx prisma migrate dev --name init
```

4. Development server-i işə sal:

```bash
npm run dev
```

## Mövcud funksionallıq

- Landing səhifə (`/`)
- Sadə dashboard skeleti (`/(dashboard)`)
- Gündəlik form (`/(dashboard)/daily`) – mood, enerji, aydın və kölgə qeydləri
- `Prisma` modeli ilə `DailyEntry` cədvəli və sadə API endpoint-lər (`/api/daily`, `/api/daily/today`)

Auth və tam feedback/insight mexanikası üçün skeleton hazırdır, sonradan genişləndirilə bilər.

# induviduation