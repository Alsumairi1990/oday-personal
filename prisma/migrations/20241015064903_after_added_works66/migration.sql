/*
  Warnings:

  - Added the required column `location` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleAr` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topTitlAr` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topTitle` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Market` table without a default value. This is not possible if the table is not empty.
  - Made the column `nameAr` on table `Market` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Market` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descriptionAr` on table `Market` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Market` required. This step will fail if there are existing NULL values in that column.
  - Made the column `icon` on table `Market` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userId` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Market" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "titleAr" TEXT NOT NULL,
ADD COLUMN     "topTitlAr" TEXT NOT NULL,
ADD COLUMN     "topTitle" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "nameAr" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "descriptionAr" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "icon" SET NOT NULL;

-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Market" ADD CONSTRAINT "Market_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
