/*
  Warnings:

  - The `status` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `tasktId` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('PLANNED', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'CANCELLED');

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "tasktId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "progress" INTEGER,
DROP COLUMN "status",
ADD COLUMN     "status" "TaskStatus";

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_tasktId_fkey" FOREIGN KEY ("tasktId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
