/*
  Warnings:

  - A unique constraint covering the columns `[menuParentId]` on the table `AdminMenu` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `menuParentId` to the `AdminMenu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AdminMenu" ADD COLUMN     "menuParentId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "MenuParent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenuParent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminMenu_menuParentId_key" ON "AdminMenu"("menuParentId");

-- AddForeignKey
ALTER TABLE "AdminMenu" ADD CONSTRAINT "AdminMenu_menuParentId_fkey" FOREIGN KEY ("menuParentId") REFERENCES "MenuParent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
