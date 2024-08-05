/*
  Warnings:

  - You are about to drop the column `additionalImages` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the column `outcome` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the column `projectDate` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the column `projectUrl` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the column `technologies` on the `Work` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Tool` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "slug" TEXT NOT NULL DEFAULT 'default-slug';

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "additionalImages",
DROP COLUMN "outcome",
DROP COLUMN "projectDate",
DROP COLUMN "projectUrl",
DROP COLUMN "technologies",
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "workUrl" TEXT;

-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "startPrice" DECIMAL(65,30),
    "median" DECIMAL(65,30),
    "currency" TEXT,
    "discount" DECIMAL(65,30),
    "effectiveDate" TIMESTAMP(3),
    "expiryDate" TIMESTAMP(3),
    "description" TEXT,
    "image" TEXT,
    "serviceId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkTool" (
    "workId" INTEGER NOT NULL,
    "toolId" INTEGER NOT NULL,

    CONSTRAINT "WorkTool_pkey" PRIMARY KEY ("workId","toolId")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "contactPerson" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "country" TEXT,
    "website" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Price_serviceId_locationId_key" ON "Price"("serviceId", "locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_slug_key" ON "Partner"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_email_key" ON "Partner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_key" ON "Customer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tool_slug_key" ON "Tool"("slug");

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTool" ADD CONSTRAINT "WorkTool_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTool" ADD CONSTRAINT "WorkTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
