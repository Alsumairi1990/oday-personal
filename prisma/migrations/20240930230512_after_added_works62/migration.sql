-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "addressAr" TEXT,
ADD COLUMN     "billingAddressAr" TEXT,
ADD COLUMN     "companyNameAr" TEXT,
ADD COLUMN     "industryAr" TEXT,
ADD COLUMN     "nameAr" TEXT,
ADD COLUMN     "notesAr" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "contactPerson" DROP NOT NULL;
