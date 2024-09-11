-- CreateTable
CREATE TABLE "_CategoryToOrder" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToOrder_AB_unique" ON "_CategoryToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToOrder_B_index" ON "_CategoryToOrder"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToOrder" ADD CONSTRAINT "_CategoryToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToOrder" ADD CONSTRAINT "_CategoryToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
