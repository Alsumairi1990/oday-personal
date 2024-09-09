/*
  Warnings:

  - The `status` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'CANCELLED');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('Product', 'Service');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderType" "OrderType",
DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus",
ALTER COLUMN "clientName" DROP NOT NULL,
ALTER COLUMN "serviceId" DROP NOT NULL,
ALTER COLUMN "currency" SET DEFAULT 'USD';
