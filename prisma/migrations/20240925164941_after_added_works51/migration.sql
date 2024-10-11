/*
  Warnings:

  - Added the required column `titleAr` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Phase" ADD COLUMN     "phaseType" TEXT;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "contentAr" TEXT,
ADD COLUMN     "excerpt" TEXT,
ADD COLUMN     "excerptAr" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "metaTitle" TEXT,
ADD COLUMN     "publishedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "readingTime" INTEGER,
ADD COLUMN     "titleAr" TEXT NOT NULL,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "published" SET DEFAULT true;

-- CreateTable
CREATE TABLE "PostCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameAr" TEXT,
    "slug" TEXT NOT NULL,
    "image" TEXT,
    "icon" TEXT,
    "description" TEXT,
    "descriptionAr" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostToPostCategory" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PostCategory_slug_key" ON "PostCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_PostToPostCategory_AB_unique" ON "_PostToPostCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToPostCategory_B_index" ON "_PostToPostCategory"("B");

-- AddForeignKey
ALTER TABLE "PostCategory" ADD CONSTRAINT "PostCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToPostCategory" ADD CONSTRAINT "_PostToPostCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToPostCategory" ADD CONSTRAINT "_PostToPostCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "PostCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
