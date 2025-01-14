-- CreateTable
CREATE TABLE "_ServiceToServiceFeature" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceToServiceFeature_AB_unique" ON "_ServiceToServiceFeature"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceToServiceFeature_B_index" ON "_ServiceToServiceFeature"("B");

-- AddForeignKey
ALTER TABLE "_ServiceToServiceFeature" ADD CONSTRAINT "_ServiceToServiceFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceToServiceFeature" ADD CONSTRAINT "_ServiceToServiceFeature_B_fkey" FOREIGN KEY ("B") REFERENCES "ServiceFeature"("id") ON DELETE CASCADE ON UPDATE CASCADE;
