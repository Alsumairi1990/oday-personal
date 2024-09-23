-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "nameAr" TEXT,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "cityAr" TEXT,
ADD COLUMN     "countryAr" TEXT;

-- AlterTable
ALTER TABLE "Phase" ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "nameAr" TEXT;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "nameAr" TEXT,
ADD COLUMN     "titleAr" TEXT,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Step" ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "nameAr" TEXT;

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "nameAr" TEXT,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Testimonial" ADD COLUMN     "contentAr" TEXT,
ADD COLUMN     "titleAr" TEXT;

-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "nameAr" TEXT,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Work" ADD COLUMN     "clientAr" TEXT,
ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "highlightsAr" TEXT,
ADD COLUMN     "titleAr" TEXT;
