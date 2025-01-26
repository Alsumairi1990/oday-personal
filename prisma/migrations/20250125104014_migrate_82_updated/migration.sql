/*
  Warnings:

  - A unique constraint covering the columns `[nameAr]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "EmployeeProfile" ADD COLUMN     "addressAr" TEXT,
ADD COLUMN     "bioAr" TEXT,
ADD COLUMN     "cityAr" TEXT,
ADD COLUMN     "countryAr" TEXT,
ADD COLUMN     "degreeAr" TEXT,
ADD COLUMN     "employmentTypeAr" TEXT,
ADD COLUMN     "firstNameAr" TEXT,
ADD COLUMN     "institutionAr" TEXT,
ADD COLUMN     "jobTitleAr" TEXT,
ADD COLUMN     "lastNameAr" TEXT,
ADD COLUMN     "nationalityAr" TEXT,
ADD COLUMN     "sexAr" TEXT,
ADD COLUMN     "specializationAr" TEXT;

--AlterTable
ALTER TABLE "Team" ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "nameAr" TEXT ;

