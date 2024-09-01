-- AlterTable
ALTER TABLE "Element" ADD COLUMN     "parentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Element" ADD CONSTRAINT "Element_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;
