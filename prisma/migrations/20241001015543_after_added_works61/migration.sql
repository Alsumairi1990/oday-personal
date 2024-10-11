-- CreateTable
CREATE TABLE "_CategoryToPhase" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPhase_AB_unique" ON "_CategoryToPhase"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPhase_B_index" ON "_CategoryToPhase"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToPhase" ADD CONSTRAINT "_CategoryToPhase_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPhase" ADD CONSTRAINT "_CategoryToPhase_B_fkey" FOREIGN KEY ("B") REFERENCES "Phase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
