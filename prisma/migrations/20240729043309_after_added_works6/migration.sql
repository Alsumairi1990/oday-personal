/*
  Warnings:

  - Added the required column `userId` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Price" DROP CONSTRAINT "Price_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Price" DROP CONSTRAINT "Price_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceCategory" DROP CONSTRAINT "ServiceCategory_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceTag" DROP CONSTRAINT "ServiceTag_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceTool" DROP CONSTRAINT "ServiceTool_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Step" DROP CONSTRAINT "Step_phaseId_fkey";

-- DropForeignKey
ALTER TABLE "Testimonial" DROP CONSTRAINT "Testimonial_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Testimonial" DROP CONSTRAINT "Testimonial_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_locationId_fkey";

-- DropForeignKey
ALTER TABLE "WorkCategory" DROP CONSTRAINT "WorkCategory_workId_fkey";

-- DropForeignKey
ALTER TABLE "WorkTag" DROP CONSTRAINT "WorkTag_workId_fkey";

-- DropForeignKey
ALTER TABLE "WorkTool" DROP CONSTRAINT "WorkTool_workId_fkey";

-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ServiceTool" ADD CONSTRAINT "ServiceTool_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceCategory" ADD CONSTRAINT "ServiceCategory_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTag" ADD CONSTRAINT "ServiceTag_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkCategory" ADD CONSTRAINT "WorkCategory_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTool" ADD CONSTRAINT "WorkTool_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTag" ADD CONSTRAINT "WorkTag_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
