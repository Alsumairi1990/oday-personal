/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Testimonial` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Testimonial" DROP CONSTRAINT "Testimonial_serviceId_fkey";

-- AlterTable
ALTER TABLE "Testimonial" DROP COLUMN "serviceId";

-- CreateTable
CREATE TABLE "_ServiceToTestimonial" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ServiceToTestimonial_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ServiceToTestimonial_B_index" ON "_ServiceToTestimonial"("B");

-- AddForeignKey
ALTER TABLE "_ServiceToTestimonial" ADD CONSTRAINT "_ServiceToTestimonial_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceToTestimonial" ADD CONSTRAINT "_ServiceToTestimonial_B_fkey" FOREIGN KEY ("B") REFERENCES "Testimonial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
