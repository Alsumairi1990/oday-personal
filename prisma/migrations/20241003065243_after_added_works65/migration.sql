-- DropForeignKey
ALTER TABLE "Phase" DROP CONSTRAINT "Phase_serviceId_fkey";

-- CreateTable
CREATE TABLE "_PhaseToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PhaseToService_AB_unique" ON "_PhaseToService"("A", "B");

-- CreateIndex
CREATE INDEX "_PhaseToService_B_index" ON "_PhaseToService"("B");

-- AddForeignKey
ALTER TABLE "_PhaseToService" ADD CONSTRAINT "_PhaseToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Phase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhaseToService" ADD CONSTRAINT "_PhaseToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
