/*
  Warnings:

  - You are about to drop the column `included` on the `PackageFeature` table. All the data in the column will be lost.
  - You are about to drop the column `packageId` on the `PackageFeature` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PackageFeature" DROP CONSTRAINT "PackageFeature_packageId_fkey";

-- AlterTable
ALTER TABLE "PackageFeature" DROP COLUMN "included",
DROP COLUMN "packageId";

-- CreateTable
CREATE TABLE "PackageFeatureLink" (
    "id" SERIAL NOT NULL,
    "included" BOOLEAN NOT NULL DEFAULT true,
    "packageId" INTEGER NOT NULL,
    "featureId" INTEGER NOT NULL,

    CONSTRAINT "PackageFeatureLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PackageFeatureLink_packageId_featureId_key" ON "PackageFeatureLink"("packageId", "featureId");

-- AddForeignKey
ALTER TABLE "PackageFeatureLink" ADD CONSTRAINT "PackageFeatureLink_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageFeatureLink" ADD CONSTRAINT "PackageFeatureLink_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "PackageFeature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
