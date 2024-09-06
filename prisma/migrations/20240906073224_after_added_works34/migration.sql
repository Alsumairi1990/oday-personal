-- DropIndex
DROP INDEX "AdminMenu_menuParentId_key";

-- AlterTable
ALTER TABLE "AdminMenu" ALTER COLUMN "menuParentId" DROP NOT NULL;
