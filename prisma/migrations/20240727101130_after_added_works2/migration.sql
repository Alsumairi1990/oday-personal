-- DropForeignKey
ALTER TABLE "ServiceCategory" DROP CONSTRAINT "ServiceCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceTool" DROP CONSTRAINT "ServiceTool_toolId_fkey";

-- DropForeignKey
ALTER TABLE "WorkCategory" DROP CONSTRAINT "WorkCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "WorkTag" DROP CONSTRAINT "WorkTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "WorkTool" DROP CONSTRAINT "WorkTool_toolId_fkey";

-- AddForeignKey
ALTER TABLE "ServiceTool" ADD CONSTRAINT "ServiceTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceCategory" ADD CONSTRAINT "ServiceCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkCategory" ADD CONSTRAINT "WorkCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTool" ADD CONSTRAINT "WorkTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTag" ADD CONSTRAINT "WorkTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
