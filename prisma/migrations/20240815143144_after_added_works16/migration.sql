/*
  Warnings:

  - You are about to drop the column `location` on the `Team` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmployeeProfile" DROP CONSTRAINT "EmployeeProfile_teamId_fkey";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "location",
ADD COLUMN     "locationId" INTEGER;

-- CreateTable
CREATE TABLE "TeamEmployee" (
    "employeeId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "TeamEmployee_pkey" PRIMARY KEY ("employeeId","teamId")
);

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamEmployee" ADD CONSTRAINT "TeamEmployee_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamEmployee" ADD CONSTRAINT "TeamEmployee_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
