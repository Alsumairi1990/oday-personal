/*
  Warnings:

  - Added the required column `userId` to the `HeroSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `PageSection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HeroSection" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PageSection" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "HeroSection" ADD CONSTRAINT "HeroSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageSection" ADD CONSTRAINT "PageSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
