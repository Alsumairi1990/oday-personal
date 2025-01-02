-- CreateTable
CREATE TABLE "_IndustryToWork" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IndustryToPost" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IndustryToWork_AB_unique" ON "_IndustryToWork"("A", "B");

-- CreateIndex
CREATE INDEX "_IndustryToWork_B_index" ON "_IndustryToWork"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IndustryToPost_AB_unique" ON "_IndustryToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_IndustryToPost_B_index" ON "_IndustryToPost"("B");

-- AddForeignKey
ALTER TABLE "_IndustryToWork" ADD CONSTRAINT "_IndustryToWork_A_fkey" FOREIGN KEY ("A") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustryToWork" ADD CONSTRAINT "_IndustryToWork_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustryToPost" ADD CONSTRAINT "_IndustryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustryToPost" ADD CONSTRAINT "_IndustryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
