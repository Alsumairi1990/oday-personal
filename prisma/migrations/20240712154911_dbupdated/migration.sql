/*
  Warnings:

  - You are about to drop the column `code` on the `Service` table. All the data in the column will be lost.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "code",
ADD COLUMN     "codeId" INTEGER,
ADD COLUMN     "location" TEXT;

-- CreateTable
CREATE TABLE "ServiceCode" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceTool" (
    "serviceId" INTEGER NOT NULL,
    "toolId" INTEGER NOT NULL,

    CONSTRAINT "ServiceTool_pkey" PRIMARY KEY ("serviceId","toolId")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT,
    "icon" TEXT,
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceTag" (
    "serviceId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "ServiceTag_pkey" PRIMARY KEY ("serviceId","tagId")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "email" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "videoContent" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phase" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "sequence" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Phase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "sequence" INTEGER,
    "image" TEXT,
    "icon" TEXT,
    "phaseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCode_code_key" ON "ServiceCode"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "ServiceCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTool" ADD CONSTRAINT "ServiceTool_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTool" ADD CONSTRAINT "ServiceTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTag" ADD CONSTRAINT "ServiceTag_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceTag" ADD CONSTRAINT "ServiceTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
