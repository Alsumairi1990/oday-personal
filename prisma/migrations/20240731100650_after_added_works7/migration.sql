/*
  Warnings:

  - Added the required column `userId` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Testimonial" ADD COLUMN     "image" TEXT,
ADD COLUMN     "published" BOOLEAN DEFAULT false,
ADD COLUMN     "response" TEXT,
ADD COLUMN     "title" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "verified" BOOLEAN DEFAULT false,
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "videoContent" DROP NOT NULL;

-- CreateTable
CREATE TABLE "TestimonialCategory" (
    "testimonialId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "TestimonialCategory_pkey" PRIMARY KEY ("testimonialId","categoryId")
);

-- CreateTable
CREATE TABLE "TestimonialTag" (
    "testimonialId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "TestimonialTag_pkey" PRIMARY KEY ("testimonialId","tagId")
);

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialCategory" ADD CONSTRAINT "TestimonialCategory_testimonialId_fkey" FOREIGN KEY ("testimonialId") REFERENCES "Testimonial"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialCategory" ADD CONSTRAINT "TestimonialCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialTag" ADD CONSTRAINT "TestimonialTag_testimonialId_fkey" FOREIGN KEY ("testimonialId") REFERENCES "Testimonial"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestimonialTag" ADD CONSTRAINT "TestimonialTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
