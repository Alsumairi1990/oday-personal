-- DropForeignKey
ALTER TABLE "Phase" DROP CONSTRAINT "Phase_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_serviceId_fkey";

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
