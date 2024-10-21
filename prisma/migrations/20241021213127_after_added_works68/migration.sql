-- CreateTable
CREATE TABLE "_LocationToProduct" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LocationToProduct_AB_unique" ON "_LocationToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationToProduct_B_index" ON "_LocationToProduct"("B");

-- AddForeignKey
ALTER TABLE "_LocationToProduct" ADD CONSTRAINT "_LocationToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToProduct" ADD CONSTRAINT "_LocationToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
