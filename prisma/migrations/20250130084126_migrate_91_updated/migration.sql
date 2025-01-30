/*
  Warnings:

  - You are about to drop the column `projectId` on the `Phase` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Phase" DROP CONSTRAINT "Phase_projectId_fkey";

-- AlterTable
ALTER TABLE "Phase" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "_PhaseToProject" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PhaseToProject_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PhaseToProject_B_index" ON "_PhaseToProject"("B");

-- AddForeignKey
ALTER TABLE "_PhaseToProject" ADD CONSTRAINT "_PhaseToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Phase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhaseToProject" ADD CONSTRAINT "_PhaseToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
