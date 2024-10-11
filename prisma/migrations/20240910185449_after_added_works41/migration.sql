/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdById` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "createdById" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "clientId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_clientId_key" ON "users"("clientId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
