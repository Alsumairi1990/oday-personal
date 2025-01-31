/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Work` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_serviceId_fkey";

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "serviceId";

-- CreateTable
CREATE TABLE "_ServiceToWork" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ServiceToWork_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ServiceToWork_B_index" ON "_ServiceToWork"("B");

-- AddForeignKey
ALTER TABLE "_ServiceToWork" ADD CONSTRAINT "_ServiceToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceToWork" ADD CONSTRAINT "_ServiceToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
