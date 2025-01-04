-- CreateTable
CREATE TABLE "Feature" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "title" TEXT,
    "titleAr" TEXT,
    "desc" TEXT,
    "descAr" TEXT,
    "more" TEXT,
    "image" TEXT,
    "moreAr" TEXT,
    "isActive" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "toolId" INTEGER NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostToTool" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToTool_AB_unique" ON "_PostToTool"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToTool_B_index" ON "_PostToTool"("B");

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTool" ADD CONSTRAINT "_PostToTool_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTool" ADD CONSTRAINT "_PostToTool_B_fkey" FOREIGN KEY ("B") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;
