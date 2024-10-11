/*
  Warnings:

  - Added the required column `userId` to the `MenuParent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MenuParent" ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MenuParent" ADD CONSTRAINT "MenuParent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
