-- CreateTable
CREATE TABLE "_CategoryToClient" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToClient_AB_unique" ON "_CategoryToClient"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToClient_B_index" ON "_CategoryToClient"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToClient" ADD CONSTRAINT "_CategoryToClient_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToClient" ADD CONSTRAINT "_CategoryToClient_B_fkey" FOREIGN KEY ("B") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
