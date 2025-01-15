-- CreateTable
CREATE TABLE "_PackageToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PackageToService_AB_unique" ON "_PackageToService"("A", "B");

-- CreateIndex
CREATE INDEX "_PackageToService_B_index" ON "_PackageToService"("B");

-- AddForeignKey
ALTER TABLE "_PackageToService" ADD CONSTRAINT "_PackageToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackageToService" ADD CONSTRAINT "_PackageToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
