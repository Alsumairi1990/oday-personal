-- CreateTable
CREATE TABLE "_ProductToService" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ClientToService" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IndustryToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToService_AB_unique" ON "_ProductToService"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToService_B_index" ON "_ProductToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToService_AB_unique" ON "_ClientToService"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToService_B_index" ON "_ClientToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IndustryToService_AB_unique" ON "_IndustryToService"("A", "B");

-- CreateIndex
CREATE INDEX "_IndustryToService_B_index" ON "_IndustryToService"("B");

-- AddForeignKey
ALTER TABLE "_ProductToService" ADD CONSTRAINT "_ProductToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToService" ADD CONSTRAINT "_ProductToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToService" ADD CONSTRAINT "_ClientToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToService" ADD CONSTRAINT "_ClientToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustryToService" ADD CONSTRAINT "_IndustryToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustryToService" ADD CONSTRAINT "_IndustryToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
