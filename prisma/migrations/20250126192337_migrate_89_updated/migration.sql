/*
  Warnings:

  - You are about to drop the column `addressAr` on the `EmployeeProfile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nameAr]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Made the column `nameAr` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "descriptionAr" TEXT,
ADD COLUMN     "nameAr" TEXT;

-- AlterTable
ALTER TABLE "EmployeeProfile" DROP COLUMN "addressAr";

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "nameAr" SET NOT NULL;

-- AlterTable
ALTER TABLE "_CategoryToClient" ADD CONSTRAINT "_CategoryToClient_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToClient_AB_unique";

-- AlterTable
ALTER TABLE "_CategoryToIndustry" ADD CONSTRAINT "_CategoryToIndustry_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToIndustry_AB_unique";

-- AlterTable
ALTER TABLE "_CategoryToOrder" ADD CONSTRAINT "_CategoryToOrder_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToOrder_AB_unique";

-- AlterTable
ALTER TABLE "_CategoryToPhase" ADD CONSTRAINT "_CategoryToPhase_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToPhase_AB_unique";

-- AlterTable
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToProduct_AB_unique";

-- AlterTable
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToProject_AB_unique";

-- AlterTable
ALTER TABLE "_CategoryToTool" ADD CONSTRAINT "_CategoryToTool_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CategoryToTool_AB_unique";

-- AlterTable
ALTER TABLE "_ClientToService" ADD CONSTRAINT "_ClientToService_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ClientToService_AB_unique";

-- AlterTable
ALTER TABLE "_ClientToWork" ADD CONSTRAINT "_ClientToWork_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ClientToWork_AB_unique";

-- AlterTable
ALTER TABLE "_IndustryToPost" ADD CONSTRAINT "_IndustryToPost_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_IndustryToPost_AB_unique";

-- AlterTable
ALTER TABLE "_IndustryToService" ADD CONSTRAINT "_IndustryToService_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_IndustryToService_AB_unique";

-- AlterTable
ALTER TABLE "_IndustryToWork" ADD CONSTRAINT "_IndustryToWork_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_IndustryToWork_AB_unique";

-- AlterTable
ALTER TABLE "_LocationToOffer" ADD CONSTRAINT "_LocationToOffer_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_LocationToOffer_AB_unique";

-- AlterTable
ALTER TABLE "_LocationToProduct" ADD CONSTRAINT "_LocationToProduct_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_LocationToProduct_AB_unique";

-- AlterTable
ALTER TABLE "_LocationToService" ADD CONSTRAINT "_LocationToService_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_LocationToService_AB_unique";

-- AlterTable
ALTER TABLE "_OfferToService" ADD CONSTRAINT "_OfferToService_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_OfferToService_AB_unique";

-- AlterTable
ALTER TABLE "_PackageToPlanCategory" ADD CONSTRAINT "_PackageToPlanCategory_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PackageToPlanCategory_AB_unique";

-- AlterTable
ALTER TABLE "_PackageToService" ADD CONSTRAINT "_PackageToService_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PackageToService_AB_unique";

-- AlterTable
ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PermissionToRole_AB_unique";

-- AlterTable
ALTER TABLE "_PhaseToService" ADD CONSTRAINT "_PhaseToService_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PhaseToService_AB_unique";

-- AlterTable
ALTER TABLE "_PlanToPlanCategory" ADD CONSTRAINT "_PlanToPlanCategory_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PlanToPlanCategory_AB_unique";

-- AlterTable
ALTER TABLE "_PlanToService" ADD CONSTRAINT "_PlanToService_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PlanToService_AB_unique";

-- AlterTable
ALTER TABLE "_PostToPostCategory" ADD CONSTRAINT "_PostToPostCategory_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PostToPostCategory_AB_unique";

-- AlterTable
ALTER TABLE "_PostToTool" ADD CONSTRAINT "_PostToTool_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_PostToTool_AB_unique";

-- AlterTable
ALTER TABLE "_ProductToService" ADD CONSTRAINT "_ProductToService_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProductToService_AB_unique";

-- AlterTable
ALTER TABLE "_ProductToTag" ADD CONSTRAINT "_ProductToTag_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProductToTag_AB_unique";

-- AlterTable
ALTER TABLE "_ProjectToTool" ADD CONSTRAINT "_ProjectToTool_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProjectToTool_AB_unique";

-- AlterTable
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_RoleToUser_AB_unique";

-- AlterTable
ALTER TABLE "_ServiceToServiceFeature" ADD CONSTRAINT "_ServiceToServiceFeature_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ServiceToServiceFeature_AB_unique";

-- AlterTable
ALTER TABLE "_TaskToUser" ADD CONSTRAINT "_TaskToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_TaskToUser_AB_unique";

-- CreateIndex
CREATE UNIQUE INDEX "Team_nameAr_key" ON "Team"("nameAr");
