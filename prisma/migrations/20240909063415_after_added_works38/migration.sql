/*
  Warnings:

  - You are about to drop the column `order` on the `Media` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Media" DROP COLUMN "order",
ADD COLUMN     "media_order" INTEGER,
ADD COLUMN     "orderId" TEXT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "image" TEXT;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
