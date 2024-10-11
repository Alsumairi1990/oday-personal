-- CreateTable
CREATE TABLE "_ClientToWork" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToWork_AB_unique" ON "_ClientToWork"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToWork_B_index" ON "_ClientToWork"("B");

-- AddForeignKey
ALTER TABLE "_ClientToWork" ADD CONSTRAINT "_ClientToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToWork" ADD CONSTRAINT "_ClientToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
