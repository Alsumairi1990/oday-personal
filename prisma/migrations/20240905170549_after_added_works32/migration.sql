/*
  Warnings:

  - Added the required column `updatedAt` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "altText" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "externalUrl" TEXT,
ADD COLUMN     "mimeType" TEXT,
ADD COLUMN     "order" INTEGER,
ADD COLUMN     "size" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "type" DROP NOT NULL;
