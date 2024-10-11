/*
  Warnings:

  - You are about to drop the column `projectManagerId` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_projectManagerId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "projectManagerId",
ADD COLUMN     "orderManagerId" TEXT;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderManagerId_fkey" FOREIGN KEY ("orderManagerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
