-- DropForeignKey
ALTER TABLE "ServiceTag" DROP CONSTRAINT "ServiceTag_tagId_fkey";

-- AddForeignKey
ALTER TABLE "ServiceTag" ADD CONSTRAINT "ServiceTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
