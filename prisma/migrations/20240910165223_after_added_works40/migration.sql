-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "clientId" TEXT;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
