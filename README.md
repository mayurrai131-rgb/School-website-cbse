# CBSE School Platform

Production-oriented Next.js school website foundation for Vercel.

## Run
npm install
cp .env.example .env
npm run dev

## Database
npx prisma generate
npx prisma migrate dev --name init

Replace demo authentication with a production auth provider/session implementation before real student data is used.
